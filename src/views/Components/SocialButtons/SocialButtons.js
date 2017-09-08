import React, {Component} from "react";
import {Row, Col, Card, CardHeader, CardBlock, Button} from "reactstrap";

const variants = [
  { icon: 'facebook', label: 'Facebook' },
  { icon: 'twitter', label: 'Twitter' },
  { icon: 'linkedin', label: 'LinkedIn' },
  { icon: 'flickr', label: 'Flickr' },
  { icon: 'tumblr', label: 'Tumblr' },
  { icon: 'xing', label: 'Xing' },
  { icon: 'github', label: 'Github' },
  { icon: 'html5', label: 'HTML5' },
  { icon: 'openid', label: 'OpenID' },
  { icon: 'stack-overflow', label: 'StackOverflow' },
  { icon: 'css3', label: 'CSS3' },
  { icon: 'youtube', label: 'YouTube' },
  { icon: 'dribbble', label: 'Dribbble' },
  { icon: 'google-plus', label: 'Google+' },
  { icon: 'instagram', label: 'Instagram' },
  { icon: 'pinterest', label: 'Pinterest' },
  { icon: 'vk', label: 'VK' },
  { icon: 'yahoo', label: 'Yahoo' },
  { icon: 'behance', label: 'Behance' },
  { icon: 'dropbox', label: 'Dropbox' },
  { icon: 'reddit', label: 'Reddit' },
  { icon: 'spotify', label: 'Spotify' },
  { icon: 'vine', label: 'Vine' },
  { icon: 'foursquare', label: 'Foursquare' },
  { icon: 'vimeo', label: 'Vimeo' },
];

class SocialButtons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <strong>Social Media Button </strong>
                <small>Usage ex.</small>
                <code style={{textTransform: 'lowercase'}}>
                  &lt;button className="btn-facebook"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;
                </code>
              </CardHeader>
              <CardBlock className="card-body">
                <h6>
                  Size Small{' '}
                  <small>Add this class <code>.btn-sm</code></small>
                </h6>
                <p>
                  {variants.map(({ icon, label }) =>
                    <Button key={icon} size="sm" className={`btn-${icon}`}>
                      <span>{label}</span>
                    </Button>
                  )}
                </p>
                <h6>Size Normal</h6>
                <p>
                  {variants.map(({ icon, label }) =>
                    <Button key={icon} className={`btn-${icon}`}>
                      <span>{label}</span>
                    </Button>
                  )}
                </p>
                <h6>
                  Size Large{' '}
                  <small>Add this class <code>.btn-lg</code></small>
                </h6>
                <p>
                  {variants.map(({ icon, label }) =>
                    <Button key={icon} size="lg" className={`btn-${icon}`}>
                      <span>{label}</span>
                    </Button>
                  )}
                </p>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12">
            <Card>
              <CardHeader>
                <strong>Social Media Button </strong>
                <small>Only icons. Usage ex.</small>
                <code>
                  &lt;button className="btn-facebook icon"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;
                </code>
              </CardHeader>
              <CardBlock className="card-body">
                <h6>
                  Size Small{' '}
                  <small>Add this class <code>.btn-sm</code></small>
                </h6>
                <p>
                  {variants.map(({ icon, label }) =>
                    <Button key={icon} size="sm" className={`btn-${icon} icon`}>
                      <span>{label}</span>
                    </Button>
                  )}
                </p>
                <h6>Size Normal</h6>
                <p>
                  {variants.map(({ icon, label }) =>
                    <Button key={icon} className={`btn-${icon} icon`}>
                      <span>{label}</span>
                    </Button>
                  )}
                </p>
                <h6>
                  Size Large{' '}
                  <small>Add this class <code>.btn-lg</code></small>
                </h6>
                <p>
                  {variants.map(({ icon, label }) =>
                    <Button key={icon} size="lg" className={`btn-${icon} icon`}>
                      <span>{label}</span>
                    </Button>
                  )}
                </p>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12">
            <Card>
              <CardHeader>
                <strong>Social Media Button </strong>
                <small>Only text. Usage ex.</small>
                <code style={{textTransform: 'lowercase'}}>
                  &lt;button className="btn-facebook text"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;
                </code>
              </CardHeader>
              <CardBlock className="card-body">
                <h6>
                  Size Small{' '}
                  <small>Add this class <code>.btn-sm</code></small>
                </h6>
                <p>
                  {variants.map(({ icon, label }) =>
                    <Button key={icon} size="sm" className={`btn-${icon} text`}>
                      <span>{label}</span>
                    </Button>
                  )}
                </p>
                <h6>Size Normal</h6>
                <p>
                  {variants.map(({ icon, label }) =>
                    <Button key={icon} className={`btn-${icon} text`}>
                      <span>{label}</span>
                    </Button>
                  )}
                </p>
                <h6>
                  Size Large{' '}
                  <small>Add this class <code>.btn-lg</code></small>
                </h6>
                <p>
                  {variants.map(({ icon, label }) =>
                    <Button key={icon} size="lg" className={`btn-${icon} text`}>
                      <span>{label}</span>
                    </Button>
                  )}
                </p>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

export default SocialButtons;
