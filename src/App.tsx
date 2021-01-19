import React, { useState } from "react";
import "./App.scss";
import "react-slideshow-image/dist/styles.css";
// import BrandPanel from "./component/BrandPanel";
import i1 from "./logos/1.png";
import i2 from "./logos/2.png";
import i3 from "./logos/3.png";
import i4 from "./logos/4.png";
import i5 from "./logos/5.png";
import i6 from "./logos/6.png";
import i7 from "./logos/7.png";
import i8 from "./logos/8.png";
import i9 from "./logos/9.png";
import i10 from "./logos/10.png";
import i11 from "./logos/11.png";
import i12 from "./logos/12.png";
import i13 from "./logos/13.svg";
import i14 from "./logos/14.svg";
import i15 from "./logos/15.png";
import { Button, HTMLSelect, Label, NumericInput } from "@blueprintjs/core";
import { CopyBlock, dracula } from "react-code-blocks";
import { Col, Container, Row } from "react-bootstrap";
// import ImageGrid from "./component/index";
import ImageGrid from "react-image-grid-animator";

function App() {
  const images = [
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
  ];

  const [isActive, setIsActive] = useState(true);
  const [state, setState] = useState<{
    visibleCount: number;
    interval: number;
    animationItemcount: number;
    transitionDuration: number;
    transitionType: "SCALE" | "FADE" | "FADE_AND_SCALE" | "NONE";
  }>({
    visibleCount: 10,
    interval: 2000,
    animationItemcount: 0,
    transitionDuration: 200,
    transitionType: "FADE_AND_SCALE",
  });

  return (
    <Container fluid className="app bp3-dark pb-5">
      <Row className="mt-3">
        <Col xs={12} className="text-center">
          <h2>React Image Grid Animator</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} lg={7} className="px-lg-0">
          <Label className="mb-2">How to install</Label>
          <CopyBlock
            text={`npm install react-image-grid-animator`}
            language="javascript"
            showLineNumbers={false}
            theme={dracula}
            codeBlock={true}
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} lg={7} className="px-lg-0">
          <Label className="mb-2">Usage</Label>
          <CopyBlock
            text={`import ImageGrid from "react-image-grid-animator";`}
            language="javascript"
            showLineNumbers={false}
            theme={dracula}
            codeBlock={true}
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} lg={7} className="px-lg-0">
          <Label>Play ground</Label>
        </Col>
      </Row>
      <Row className="mt-2 justify-content-center">
        <Col xs={12} lg={7} className="px-0">
          <Container fluid>
            <Row className="justify-content-center">
              <Col
                xs={12}
                lg={6}
                className="d-flex justify-content-lg-end justify-content-center px-lg-0 pr-lg-1"
              >
                <div className="c-card">
                  <CopyBlock
                    text={`<ImageGrid 
    images = {images}
    visibleCount = {${state.visibleCount}}
    interval = {${state.interval}}
    animationItemcount = {${state.animationItemcount}}
    transitionType={${state.transitionType}}
    transitionDuration = {${state.transitionDuration}}
    isActive = {${isActive}} 
/>`}
                    language="javascript"
                    showLineNumbers={true}
                    theme={dracula}
                    codeBlock={true}
                  />
                </div>
              </Col>
              <Col
                xs={12}
                lg={6}
                className="d-flex justify-content-lg-start justify-content-center mt-2 mt-lg-0 px-lg-0 pl-lg-1"
              >
                <div className="c-card">
                  <div className="i-group">
                    <Label>Visible Count:</Label>
                    <NumericInput
                      id="text-input"
                      fill
                      value={state.visibleCount}
                      min={1}
                      placeholder="Placeholder text"
                      onValueChange={(e) => {
                        console.log(e);
                        if (e < images.length && e > 0) {
                          setState({ ...state, visibleCount: e });
                        }
                      }}
                    />
                  </div>
                  <div className="i-group">
                    <Label>interval:</Label>
                    <NumericInput
                      id="text-input"
                      value={state.interval}
                      min={100}
                      fill
                      majorStepSize={501}
                      stepSize={500}
                      placeholder="Placeholder text"
                      onValueChange={(e) => {
                        setState({ ...state, interval: e });
                      }}
                    />
                  </div>
                  <div className="i-group">
                    <Label>Animation Item count:</Label>
                    <NumericInput
                      id="text-input"
                      value={state.animationItemcount}
                      min={0}
                      fill
                      placeholder="Placeholder text"
                      onValueChange={(e) => {
                        if (
                          (state.visibleCount + (state.visibleCount % 2)) / 2 >=
                          e
                        ) {
                          setState({ ...state, animationItemcount: e });
                        }
                      }}
                    />
                  </div>
                  <div className="i-group">
                    <Label>Transition Type:</Label>
                    <HTMLSelect
                      id="text-input"
                      fill
                      value={state.transitionType}
                      placeholder="Placeholder text"
                      onChange={(e) => {
                        setState({
                          ...state,
                          transitionType: e.target.value as any,
                        });
                      }}
                    >
                      <option value="SCALE">SCALE</option>
                      <option value="FADE">FADE</option>
                      <option value="FADE_AND_SCALE">FADE_AND_SCALE</option>
                      <option value="NONE">NONE</option>
                    </HTMLSelect>
                  </div>
                  <div className="i-group">
                    <Label>Transition Duration:</Label>
                    <NumericInput
                      id="text-input"
                      min={200}
                      majorStepSize={201}
                      stepSize={200}
                      fill
                      value={state.transitionDuration}
                      placeholder="Placeholder text"
                      onValueChange={(e) => {
                        setState({ ...state, transitionDuration: e });
                      }}
                    />
                  </div>
                  <div className="i-group">
                    <Label>
                      If animation item count value is "0" then it will be
                      randomized.
                    </Label>
                  </div>
                  <div
                    className="i-group"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Button
                      onClick={() => setIsActive(!isActive)}
                      intent={isActive ? "danger" : "primary"}
                      rightIcon={isActive ? "stop" : "play"}
                    >
                      {isActive ? "Stop" : "Start"}
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} lg={7} className="px-lg-0">
          <div className="image-container">
            <ImageGrid
              images={images}
              visibleCount={state.visibleCount}
              interval={state.interval}
              animationItemcount={state.animationItemcount}
              transitionDuration={state.transitionDuration}
              isActive={isActive}
              transitionType={state.transitionType}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
