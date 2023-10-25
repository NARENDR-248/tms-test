import { useTerminalsStore } from "@/store/terminalsStore";
import CameraTabs from "./components/tabs";
import LiveViewStyles from "./styles";

const LiveView = () => {
  const gateId = useTerminalsStore((state) => state.gateId);

  return (
    <LiveViewStyles.Container id="cameraTabs">{gateId && <CameraTabs gateId={gateId} />}</LiveViewStyles.Container>
  );
};

export default LiveView;
