import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAll } from "../../../redux/features/User/authAction";

const UserTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAll());
  }, [dispatch]);

  const { users } = useSelector((state) => state.auth);

  return (
    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
      <table className='items-center w-full bg-transparent border-collapse'>
        <thead>
          <tr>
            <th className='px-6 py-3 text-xs font-semibold text-center uppercase border border-solid bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700'>
              Name
            </th>
            <th className='px-6 py-3 text-xs font-semibold text-center uppercase border border-solid bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700'>
              Email
            </th>
            <th className='px-6 py-3 text-xs font-semibold text-center uppercase border border-solid bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700'>
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td className='p-4 px-6 text-md whitespace-nowrap border-t-0 border-l-0 border-r-0'>
                  <div className='flex justify-center'>{user.name}</div>
                </td>
                <td className='p-4 px-6 text-md text-center whitespace-nowrap border-t-0 border-l-0 border-r-0'>
                  {user.email}
                </td>
                <td className='p-4 px-6 text-md text-center whitespace-nowrap border-t-0 border-l-0 border-r-0'>
                  {user.role === 1 ? "Admin" : "User"}
                </td>
              </tr>
            ))
          ) : (
            <tr className='text-center border'>
              <td colSpan={3} className='p-3 font-bold text-red-500'>
                No Data Found!!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;