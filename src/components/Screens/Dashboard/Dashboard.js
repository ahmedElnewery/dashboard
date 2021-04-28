import FilterationGroup from "../../Dashboard/FilterationGroup/FilterationGroup";
import FilterBox from "../../Dashboard/FilterationGroup/FilterBox";
import TotalCheckouts from "../../Dashboard/FilterationGroup/TotalCheckouts";
import TotalFailures from "../../Dashboard/FilterationGroup/TotalFailure";
import Table from "../../Dashboard/Table/Table";
import TableBody from "../../Dashboard/Table/TableBody";
import TableHeader from "../../Dashboard/Table/TableHeader";

import Page from "../../Layout/Page";
// import style from './Dashboard.module.css'
const Dashboard = () => {
  return (
    <Page title="dashboard">
      <div className="grid  grid-cols-12 gap-3 ">
        <div className="span col-span-8">
          <FilterationGroup>
            <FilterBox />
            <TotalCheckouts />
            <TotalFailures />
          </FilterationGroup>

          <Table>
            <TableHeader />
            <TableBody />
          </Table>
        </div>
      </div>
    </Page>
  );
};

export default Dashboard;
