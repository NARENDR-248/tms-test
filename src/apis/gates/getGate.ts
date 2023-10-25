import tmsRequest from "../__helpers/request";

export const getGate = async (id: string, router: any) => {
  try {
    const { data, status } = await tmsRequest.get(`gates/${id}`);
    return data;
  } catch (err) {
    // router.push('/404');
  }
};
