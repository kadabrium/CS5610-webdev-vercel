'use client'
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent"
import ContextExamples from "./context/ContextExamples";
import Counter from "./Counter";
import CounterBroken from "./CounterBroken";
import DateStateVariable from "./DateStateVariable";
import Effect from "./Effect";
import HookProfileForm from "./hooks/HookProfileForm";
import IndependentToggles from "./hooks/IndependentToggles";
import LocalStorageDemo from "./hooks/LocalStorageDemo";
import ToggleDemo from "./hooks/ToggleDemo";
import WindowSizeDemo from "./hooks/WindowSizeDemo";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvents"
import PassingFunctions from "./PassingFunctions"
import ProfileForm from "./profile/ProfileForm";
import PropDrilling from "./PropDrilling";
import ReduxExamples from "./redux/ReduxExamples";
import StringStateVariables from "./StringStateVariables";
import UrlEncoding from "./UrlEncoding";
import ZustandExamples from "./zustand/ZustandExamples";

export default function Lab4() {
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <h3>Client State Variables</h3>
      <ClickEvent/>
      <PassingDataOnEvent/>
      <PassingFunctions message="Hello from Lab 4" theFunction={sayHello} theOtherFunction={theOtherFunction}/>
      <CounterBroken/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ProfileForm/>
      <ParentStateComponent/>
      <PropDrilling/>
      <UrlEncoding/>
      <ContextExamples/>
      <ZustandExamples/>
      <ReduxExamples/>
      <Effect/>
      <WindowSizeDemo/>
      <ToggleDemo/>
      <LocalStorageDemo/>
      <IndependentToggles/>
      <HookProfileForm/>
    </div>
  );
}

const sayHello = (msg: string) => { alert(msg);}
const theOtherFunction = () => { alert("Sample from parent"); };