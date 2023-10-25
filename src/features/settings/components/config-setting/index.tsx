import { useTranslation } from "react-i18next";
import ConfigStyles from "./styledComponents";
import { useEffect, useState } from "react";
import { ConfigurationsTable } from "./components/table/ConfigurationsTable";
import { useConfigDrawerStore } from "@/store/configStore";
import ConfigDrawer from "./components/configDrawer";
import { useConfigurations } from "@/apis/settings/config-setting/useConfigurations";
import ConfigFilter from "./components/filter/ConfigFilter";

const ConfigSetting = () => {
  const [page, setPage] = useState(1);
  const [take, setTake] = useState(10);
  const [count, setCount] = useState(0);

  const [selectedEventId, setSelectedEventId] = useState<any>("");
  const [selectedLinkedEventIds, setSelectedLinkedEventIds] = useState<any>([]);
  const [selectedCarriers, setSelectedCarriers] = useState<any>([]);
  const [selectedAircraftTypes, setSelectedAircraftTypes] = useState([]);
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState([]);

  const {
    data: configData,
    refetch: refetchConfigData,
    isLoading: configDataLoading,
  } = useConfigurations(
    page,
    take,
    selectedEventId,
    selectedLinkedEventIds,
    selectedCarriers,
    selectedAircraftTypes,
    selectedTimeOfDay,
  );

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  useEffect(() => {
    setSelectedEventId("");
    setSelectedLinkedEventIds([]);
    setSelectedCarriers([]);
    setSelectedAircraftTypes([]);
    setSelectedTimeOfDay([]);
  }, [isArabic]);

  useEffect(() => {
    if (configData) {
      const paginationCount: any = Math.ceil(configData?.configCount / take);
      setCount(paginationCount);
    }
  }, [configData]);

  useEffect(() => {
    setPage(1);
  }, [selectedEventId, selectedLinkedEventIds, selectedCarriers, selectedAircraftTypes, selectedTimeOfDay]);

  const setConfigDrawerInfo = useConfigDrawerStore((state) => state.setConfigDrawerInfo);

  const configDrawerInfo = useConfigDrawerStore((state) => state.configDrawerInfo);

  const handleCreateConfig = () => {
    setConfigDrawerInfo({
      open: true,
      id: "",
      create: true,
      edit: false,
      duplicate: false,
    });
  };

  return (
    <ConfigStyles.Container role="configurations-table">
      <ConfigStyles.Heading>
        <ConfigFilter
          selectedEventId={selectedEventId}
          setSelectedEventId={setSelectedEventId}
          selectedLinkedEventIds={selectedLinkedEventIds}
          setSelectedLinkedEventIds={setSelectedLinkedEventIds}
          selectedCarriers={selectedCarriers}
          setSelectedCarriers={setSelectedCarriers}
          selectedAircraftTypes={selectedAircraftTypes}
          setSelectedAircraftTypes={setSelectedAircraftTypes}
          selectedTimeOfDay={selectedTimeOfDay}
          setSelectedTimeOfDay={setSelectedTimeOfDay}
        />
        <ConfigStyles.Create onClick={handleCreateConfig}>{t("create-config")}</ConfigStyles.Create>
      </ConfigStyles.Heading>
      <ConfigurationsTable
        configData={configData?.data}
        refetchConfigData={refetchConfigData}
        configDataLoading={configDataLoading}
        page={page}
        setPage={setPage}
        take={take}
        count={count}
      />
      <ConfigDrawer refetchConfigData={refetchConfigData} />
    </ConfigStyles.Container>
  );
};

export { ConfigSetting };
