/**
 * Build a personal Student Profile form that reuses every control family from this section — not a tiny stub. 
 * There is one canonical file for that work: app/labs/lab1/forms/YourForm.tsx. Wrap the fields in <form id="wd-your-form">, import that one YourForm component into Forms.tsx once after the sample components, and include all of the following:

Text fields — first name, last name, and a password (or student ID) field, each with a labeled htmlFor/id pair.
Textarea— a short bio or "why I am taking this course" blurb (cols/rows set).
Radio buttons — two mutually exclusive groups, each with its own name: class standing (for example Freshman 
/ Sophomore / Junior / Senior / Graduate) and one more exclusive choice such as full-time / part-time or on-campus / commuter.
Checkboxes — at least three independent interests (languages, frameworks, or career goals you care about).
Dropdowns — a single-select for your major (or college), plus a multiple select for topics you want to 
deepen this term (at least four options; preselect two).
Typed fields — type="email" for your school email, type="number" for expected graduation year 
(with a sensible min/max), type="date" for your birthday or program start date, and type="range" for how excited you are about the course (0–10) with a visible label.
Buttons — a Save control with type="submit" and a Cancel control with type="button", each with its own id.
Prefer realistic defaults that describe you (placeholders, defaultValue, checked options).
 The live demo above is the course sample; your profile form is the ambitious personal piece graders can skim for coverage of each input type.

If you use an assistant, overwrite that same path — app/labs/lab1/forms/YourForm.tsx — 
rather than letting it create a second file under another name, in a nested folder, or as a parallel "AI" form. 
Keep the same form id, wd-your-form, on that single component. Forms.tsx must import that one YourForm only — 
do not keep both an original and an AI-generated form imported or rendered.
 */