import { useGetShopStatus } from "@/feature/home/listofhomeitems/shopstatus/useGetShopStatus";
import React from "react";
import Table from "@/style/Table";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import Loading from "@/style/Loading";

function ShopStatusTable() {
  const { statusShop, isLoading } = useGetShopStatus();
  const { phone_number, name, status, description } = statusShop;
  return isLoading ? (
    <Loading />
  ) : (
    <Table>
      <Table.Header>
        <th>شماره تلفن</th>
        <th>وضعیت فروشگاه</th>
        <th>نام فروشگاه</th>
        <th>توضیحات</th>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <td>1</td>
          <td>{toPersianNumbers(phone_number)}</td>
          <td>{status}</td>
          <td>{name}</td>
          <td>{description}</td>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default ShopStatusTable;
