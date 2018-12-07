// Not working currently

import React from "react";

const Input = () => {
  return (
    <div className="form-group col-md-8">
      <label htmlFor="inputEmail4">Email</label>
      <input
        value={user.email}
        onChange={this.handleEmailChange}
        type="email"
        name="email"
        className="form-control"
        id="email"
        placeholder="Email"
        ref={this.username}
      />
    </div>
  );
};

export default Input;
