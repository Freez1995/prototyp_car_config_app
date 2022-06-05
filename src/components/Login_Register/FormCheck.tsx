import PasswordChecklist from "react-password-checklist";
import "./Login_Register.css";

export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
}

// Return boolean for Register Component submit button enable/disable
const EmailCheckRegex = (email: string): boolean => {
  const regex = new RegExp(
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (regex.test(email)) {
    return true;
  }
  return false;
};

// Depend on checkbox show/hide password
const ShowPassword = (passwordCheckbox: boolean): string => {
  let passwordType: string = "password";
  if (passwordCheckbox === true) {
    passwordType = "text";
  } else {
    passwordType = "password";
  }
  return passwordType;
};

// Register Component password check up with icons and text
const PasswordCheckComponent = ({
  value,
  valueAgain,
  onValidationChange,
}: {
  value: string;
  valueAgain: string;
  onValidationChange: any;
}) => {
  return value ? (
    <PasswordChecklist
      className="password-checklist"
      rules={[
        "minLength",
        "specialChar",
        "number",
        "capital",
        "lowercase",
        "match",
      ]}
      minLength={6}
      value={value}
      iconSize={12}
      valueAgain={valueAgain}
      onChange={(isValid) => {
        onValidationChange(isValid);
      }}
    />
  ) : (
    <></>
  );
};

export { PasswordCheckComponent, EmailCheckRegex, ShowPassword };
