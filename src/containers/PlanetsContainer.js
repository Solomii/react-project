import React from "react";
import { connect } from "react-redux";
import { getAllPlanetFunc, getAllDataFunc } from "../actions/planets";
import planets from "../reducers/planets";
import Planets from "../components/Planets/Planets";

const PlanetsContainer = ({ planets, getAllPlanets, getAllData }) => (
  <Planets
    planets={planets}
    getAllData={getAllData}
    getAllPlanets={getAllPlanets}
  />
);

const mapStateToProps = (state) => ({
  planets: state.planets,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPlanets: getAllPlanetFunc(dispatch),
    getAllData: getAllDataFunc(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PlanetsContainer);
