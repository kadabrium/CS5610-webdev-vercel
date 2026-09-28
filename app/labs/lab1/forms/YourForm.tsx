
'use client';

import YourTextFields from "./TextFields";
import YourTextarea from "./Textarea";
import YourRadioButtons from "./RadioButtons";
import { YourCheckboxes } from "./Checkboxes";
import YourDropdowns from "./Dropdowns";
import YourOtherFieldTypes from "./OtherFieldTypes";
import YourButtons from "./Buttons";


export default function YourForms() {
  return (
    <>
      
        <YourTextFields />
        <YourTextarea />
        <YourCheckboxes/>
        <YourRadioButtons/>
        <YourDropdowns/>
        <YourOtherFieldTypes/>
        <YourButtons/>
      

    </>
  );
}