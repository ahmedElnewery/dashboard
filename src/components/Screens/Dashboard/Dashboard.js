import FilterationGroup from "../../Dashboard/FilterationGroup/FilterationGroup";
import FilterBox from "../../Dashboard/FilterationGroup/FilterBox";
import TotalCheckouts from "../../Dashboard/FilterationGroup/TotalCheckouts";
import TotalFailures from "../../Dashboard/FilterationGroup/TotalFailure";
import LicenseBox from "../../Dashboard/LicenseBox/LicenseBox";
import Table from "../../Dashboard/Table/Table";
import TableBody from "../../Dashboard/Table/TableBody";
import TableHeader from "../../Dashboard/Table/TableHeader";
import Transfer from "../../Dashboard/Transfer/Transfer";
import Page from "../../Layout/Page";
import DiscordBox from './../../Dashboard/DiscordBox/DiscordBox'
// import style from './Dashboard.module.css'
const Dashboard = () => {
  return (
    <Page title="dashboard">
      <div className="grid  grid-cols-12 gap-12 ">
        <div className=" lg:col-span-8 col-span-12 ">
          <div className="mb-10">
          <FilterationGroup>
            <FilterBox />
            <TotalCheckouts />
            <TotalFailures />
          </FilterationGroup>

          </div>

          <Table>
            <TableHeader />
            <TableBody />
          </Table>
        </div>
        <div className="lg:col-span-4 col-span-12 ">
          <div className="mb-8">
          <LicenseBox/>
          </div>
          <div className="mb-8">
          <DiscordBox/>

          </div>
          <div className="mb-8">
          <Transfer/>

          </div>
        </div>
      </div>
    </Page>
  );
};

export default Dashboard;
