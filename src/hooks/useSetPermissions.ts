import { useAppDispatch } from "../lib/hooks";
import { settingsPermissions, settingsSetPermissions } from "../lib/slice/settings";

const useSetPermissions = () => {
  const dispatch = useAppDispatch();
  const setPermissions = (permissionsObj: settingsPermissions) => {
    Object.keys(permissionsObj).forEach((key: any) => {
      const value = (permissionsObj as unknown as Array<any>)[key];
      dispatch(settingsSetPermissions({ key, value }));
    });
  };
  return setPermissions;
};

export default useSetPermissions;
