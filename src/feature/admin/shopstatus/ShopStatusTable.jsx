import { useGetShopStatus } from "@/feature/home/listofhomeitems/shopstatus/useGetShopStatus";
import React from "react";
import Table from "@/style/Table";
import Loading from "@/style/Loading";
import Empty from "@/style/Empty";

function ShopStatusTable() {
  const { statusShop = {}, isLoading } = useGetShopStatus();

  if (isLoading) return <Loading />;
  if (!statusShop || Object.keys(statusShop).length === 0) {
    return <Empty resourceName='وضعیت' />;
  }
  const statusRaw = { active: "مغازه باز است", inactive: "مغازه بسته است" };
  const { phone_number, name, status, description } = statusShop;

  return (
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
          <td>{phone_number}</td>
          <td>{statusRaw[status]}</td>
          <td>{name}</td>
          <td>{description}</td>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default ShopStatusTable;
