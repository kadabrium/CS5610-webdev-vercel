'use client';

import TextFields from "./TextFields";
import Textarea from "./Textarea";
import RadioButtons from "./RadioButtons";
import Dropdowns from "./Dropdowns";
import OtherFieldTypes from "./OtherFieldTypes";
import Buttons from "./Buttons";


export default function Forms() {
  return (
    <div id="wd-forms">
      <h4>Form Elements</h4>

      <form id="wd-text-fields"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <TextFields />
        <Textarea />
        <RadioButtons/>
        <Dropdowns/>
        <OtherFieldTypes/>
        <Buttons/>
      </form>

    </div>
  );
}