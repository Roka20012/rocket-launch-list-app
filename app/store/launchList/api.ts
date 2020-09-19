import client from '~/app/utils/apiInterceptor';

// TODO: add type response for getLaunchList
export const getLaunchList = async (): Promise<any> => {
  try {
    const response = await client.get('launch');

    return response.data;
  } catch (error) {
    throw error;
  }
};
