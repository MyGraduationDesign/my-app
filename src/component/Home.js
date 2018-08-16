import React, { Component } from 'react';
import {Media,Grid,Row,Col,Alert,Badge,Breadcrumb,ButtonToolbar,Button} from 'react-bootstrap';
import './Home.css';
import thumbnail from './img/thumbnail.png';
import AlertDismissable from './alert/AlertDismissable';

class Home extends Component {
  render() {
    return (
      <div>
          <Row>
              <Col md={12}>
                  <Media>
                      <Media.Left>
                          <img width={64} height={64} src={thumbnail} alt="thumbnail" />
                      </Media.Left>
                      <Media.Body>
                          <Media.Heading>Media Heading</Media.Heading>
                          <p>
                              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                              fringilla. Donec lacinia congue felis in faucibus.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
          </Row>
          <Grid>
              <Row>
                  <Col md={12}>
                      <AlertDismissable/>
                  </Col>
                  <Col md={8}>
                      <p>
                          Badges <Badge>42</Badge>
                      </p>
                  </Col>
                  <Col md={4}>
                      <Alert bsStyle="warning">
                          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
                          good.
                      </Alert>
                  </Col>
                  <Col md={6}>
                      <Breadcrumb>
                          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                          <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                              Library
                          </Breadcrumb.Item>
                          <Breadcrumb.Item active>Data</Breadcrumb.Item>
                      </Breadcrumb>
                  </Col>
                  <Col md={6}>
                      <ButtonToolbar>
                          {/* Standard button */}
                          <Button>Default</Button>

                          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                          <Button bsStyle="primary">Primary</Button>

                          {/* Indicates a successful or positive action */}
                          <Button bsStyle="success">Success</Button>

                          {/* Contextual button for informational alert messages */}
                          <Button bsStyle="info">Info</Button>

                          {/* Indicates caution should be taken with this action */}
                          <Button bsStyle="warning">Warning</Button>

                          {/* Indicates a dangerous or potentially negative action */}
                          <Button bsStyle="danger">Danger</Button>

                          {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
                          <Button bsStyle="link">Link</Button>
                      </ButtonToolbar>
                  </Col>
              </Row>
          </Grid>


      </div>
    );
  }
}

export default Home;
