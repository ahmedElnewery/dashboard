import Col from '../../Layout/Grid/Col/Col';
import Row from '../../Layout/Grid/Row/Row'
import Page from './../../Layout/Page/Page'
import style from './Dashboard.module.css'
const Dashboard = () => {
    return ( 
        <Page title="dashboard">
          <Row>
            <Col md={8}>
                heelo
            </Col>
            <Col md={4}>
                hello
            </Col>
           </Row>
        </Page>
     );
}
 
export default Dashboard;