import React from "react";
import { Company } from "../../types/company.type";
import { User } from "../../types/user.type";
import ListWrapper from "./styled";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";

const List = (props: {
  data: Array<Company | User>;
  columns: ColumnsType<Company> | ColumnsType<User> | any;
  pagination?: TablePaginationConfig | false;
}) => {
  const { data, columns, pagination } = props;

  return (
    <ListWrapper style={{ maxWidth: "1600px" }}>
      <Table dataSource={data} columns={columns} pagination={pagination} />
    </ListWrapper>
  );
};

export default List;
