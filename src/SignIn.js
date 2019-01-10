import React from "react";

const SignIn = ({ onRouteChange, onSeedChange }) => {
  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Seed</label>
              <input
                onChange={onSeedChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                name="seed"
                id="seed"
              />
            </div>
          </fieldset>
          <div className="center">
            <input
              onClick={() => onRouteChange("home")}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default SignIn;
