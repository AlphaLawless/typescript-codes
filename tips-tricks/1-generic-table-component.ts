import React from "react";

interface TableProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
export const Table = <T,>(props: TableProps<T>) => {
  return null;
};

export const Component = () => {
  return (
    <Table
      items={[{ id: "1" }, { product: "pen"}]}
      renderItem={(item) => {
        return null;
      }}
    ></Table>
    <Table
      items={[{ id: "1", firstname: "Alpha" }]}
      renderItem={(item) => {
        return null;
      }}
    ></Table>
  );
};
