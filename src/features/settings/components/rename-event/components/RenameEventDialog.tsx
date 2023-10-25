import React, { FC, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert } from "@mui/material";
import Joi from "joi";

// Importing Custom Hooks
import { useRenamingEventDialog } from "../store";
import { updateEventDisplayName } from "@/apis/settings/rename-event/renameEventAPIs";

// Importing Custom Validator
import { renameEventSchema } from "../utils/ValidationSchema";
import {
  checkIsArabic,
  checkIsEnglish,
} from "../utils/Validator";

// Importing Icons & Images
import EditPencilIcon from "../assets/icons/edit-pencil.svg";

// Styled Components
import { Components } from "../styled-components/sc-red";

const RenameEventDialog: FC = () => {
  const { t } = useTranslation();
  const { isRDOpen, setIsRDOpen, RDEventId, RDEvent, setRefetch } =
    useRenamingEventDialog();

  const [renameVal, setRenameVal] = useState<any>({
    uiNameEn: "",
    uiNameAr: "",
  });
  const [buttonLoader, setButtonLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>({
    general: "",
    uiNameEn: "",
    uiNameAr: "",
  });
  const handleClose = () => {
    setIsRDOpen(false, "", {});
    setErrorMessage({
      general: "",
      uiNameEn: "",
      uiNameAr: "",
    });
  };
  const changeRenameVal = (_e) => {
    setRenameVal((prevNames) => {
      return {
        ...prevNames,
        [_e.target.name]: _e.target.value,
      };
    });
  };
  const clearErrorMessages = () => {
    setErrorMessage(() => {
      return {
        general: [],
        uiNameEn: "",
        uiNameAr: "",
      }
    })
  }
  const updateEventUIName = async () => {

    if(renameVal.uiNameEn !== null ){
      const validatorResponseIsArabic = checkIsArabic(renameVal.uiNameEn);
      if(!validatorResponseIsArabic.validated) {
        clearErrorMessages();
        setErrorMessage((prevMessages) => {
          return {
            ...prevMessages,
            uiNameEn: validatorResponseIsArabic.msg,
          };
        });
        return;
      }
    }
    if(renameVal.uiNameAr !== null) {
      const validatorResponseIsEnglish = checkIsEnglish(renameVal.uiNameAr);
      if(!validatorResponseIsEnglish.validated) {
        clearErrorMessages();
        setErrorMessage((prevMessages) => {
          return {
            ...prevMessages,
            uiNameAr: validatorResponseIsEnglish.msg,
          };
        });
        return;
      }
    }

    const validatorResponse = renameEventSchema.validate(renameVal);
    if (validatorResponse.error) {
      clearErrorMessages();
      let errorFor: any = validatorResponse.error.details[0].context?.label;
      let errorMessage = validatorResponse.error.details[0].message;
      setErrorMessage((prevMessages) => {
        return {
          ...prevMessages,
          [errorFor]: errorMessage,
        };
      });
      return;
    }

    // If validations are passed we will store
    try {
      setButtonLoader(true);
      await updateEventDisplayName(RDEventId, renameVal);
      handleClose();

    } catch (err: any) {
      console.log(err);
      if(err?.response?.data?.statusCode === 422)
      setErrorMessage((prevErrMessages) => {
        return {
          ...prevErrMessages,
          general: "Please validate data",
        }
      })
    }
    setButtonLoader(false);
    setRefetch(true);
  };

  useEffect(() => {
    setRenameVal({
      uiNameEn: RDEvent.ui_name_en,
      uiNameAr: RDEvent.ui_name_ar,
    });
  }, [RDEvent]);

  return (
    <Components.RenameDialog
      open={isRDOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Components.RDialogTitle>
        <Components.RDialogEditIcon src={EditPencilIcon} alt="#" />
        {t("rename-events.re")}
      </Components.RDialogTitle>
      <Components.RDialogContent>
        <Components.RDialogContextText>
          {t("rename-events.enter-name-for-re")}
        </Components.RDialogContextText>
         {/* General Error Messages */}
         {errorMessage.general != "" && (
          <Alert
            severity="error"
            sx={{ width: "100%", maxWidth: "100%", padding: "0px 5px" }}
          >
            {errorMessage.general}
          </Alert>
        )}
        <Components.RDialogInput
          label="English"
          onChange={changeRenameVal}
          // variant="outlined"
          name="uiNameEn"
          value={renameVal.uiNameEn}
          InputLabelProps={{
            style: {
              color: "rgba(255,255,255,0.5)",
            },
          }}
          InputProps={{
            style: {
              // borderRadius: "9px",
              background: "#1F3A51",
              // border: "1px solid rgba(255,255,255,0.15)",
              outlineColor: "rgba(255,255,255,0.15)",
              color: "#ffffff",
            },
          }}
        ></Components.RDialogInput>
        {errorMessage.uiNameEn != "" && (
          <Alert
            severity="error"
            sx={{ width: "100%", maxWidth: "100%", padding: "0px 5px" }}
          >
            {errorMessage.uiNameEn}
          </Alert>
        )}
        <Components.RDialogInput
          label="عربي"
          onChange={changeRenameVal}
          // variant="outlined"
          name="uiNameAr"
          value={renameVal.uiNameAr}
          InputLabelProps={{
            style: {
              color: "rgba(255,255,255,0.5)",
            },
          }}
          InputProps={{
            style: {
              // borderRadius: "9px",
              background: "#1F3A51",
              // border: "1px solid rgba(255,255,255,0.15)",
              outlineColor: "rgba(255,255,255,0.15)",
              color: "#ffffff",
            },
          }}
        ></Components.RDialogInput>
        {errorMessage.uiNameAr != "" && (
          <Alert
            severity="error"
            sx={{ width: "100%", maxWidth: "100%", padding: "0px 5px" }}
          >
            {errorMessage.uiNameAr}
          </Alert>
        )}
      </Components.RDialogContent>
      <Components.RDialogActions>
        <Components.RDialogCancelBtn onClick={handleClose}>
          {t("rename-events.cancel")}
        </Components.RDialogCancelBtn>
        <Components.RDialogRenameBtn
          onClick={updateEventUIName}
          loading={buttonLoader}
          variant="outlined"
        >
          {t("rename-events.rename")}
        </Components.RDialogRenameBtn>
      </Components.RDialogActions>
    </Components.RenameDialog>
  );
};

export default RenameEventDialog;