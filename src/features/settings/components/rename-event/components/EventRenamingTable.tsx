import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";

// Importing Components
import OutlineRenameBtn from "./OutlineRenameBtn";

// Importing Interfaces & Types
import { TEventRename } from "../utils/Interfaces";

// Styled Components
import { Components } from "../styled-components/sc-ert";

const EventRenamingTable: FC<{ data: any }> = ({ data }) => {
  const { t, i18n } = useTranslation();
  let isArabic = i18n.language.startsWith("ar_AR");

  const [currentHoveredEvent, setCurrentHoveredEvent] = useState<number | null>(
    null
  );
  const showRenameBtn = (eventId: number) => {
    setCurrentHoveredEvent(eventId);
  };
  const hideRenameBtn = (eventId: number) => {
    setCurrentHoveredEvent(eventId);
  };
  return (
    <Components.EventTable>
      <Components.EventTableHead>
        <Components.EventTableHeadRow>
          <Components.EventTableCell>
            {t("rename-events.event-name")}
          </Components.EventTableCell>
          <Components.EventTableCell>
            {t("rename-events.event-name")} UI
          </Components.EventTableCell>
          <Components.EventTableCell>
            {t("rename-events.arabic-words")}
          </Components.EventTableCell>
        </Components.EventTableHeadRow>
      </Components.EventTableHead>
      <Components.EventTableBody className="rs-tbody-row">
        {/* This will loop through based on events */}
        {data?.map((item) => (
          <Components.EventTableBodyRow
            key={item.id}
            onMouseEnter={() => showRenameBtn(item.id)}
            onMouseLeave={() => hideRenameBtn(item.id)}
          >
            <Components.EventTableBodyCell>
              <Components.CellTextHolder>
                {isArabic ? item.name_ar : item.name_en}
              </Components.CellTextHolder>
            </Components.EventTableBodyCell>
            <Components.EventTableBodyCell
            // sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Components.CellTextHolder>
                {item.ui_name_en != null ? item.ui_name_en : "-"}
              </Components.CellTextHolder>
            </Components.EventTableBodyCell>
            <Components.EventTableBodyCell
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Components.CellTextHolder sx={{ marginRight: "60px" }}>
                {item.ui_name_ar != null ? item.ui_name_ar : "-"}
              </Components.CellTextHolder>
              {currentHoveredEvent === item.id && (
                <OutlineRenameBtn eventId={item.id} event={item} />
              )}
            </Components.EventTableBodyCell>
          </Components.EventTableBodyRow>
        ))}
      </Components.EventTableBody>
    </Components.EventTable>
  );
};

export default EventRenamingTable;