


import "./style.css";
import { Paper } from '@material-ui/core';
import LinearProgressBar from "../ProgressBars/LinearProgressBar"
import { firebaseConfig as firebase } from "../../config";
import { useState } from "react";

const UpdatePassword = () => {
    const [passwordError, setpasswordError] = useState("Password Should be greater than 6 characters")
    const [cpasswordError, setcpasswordError] = useState("")
    const [credentialError, setCredentialError] = useState();
    const [credentials, setCredentials] = useState();

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    const [values, setValues] = useState({
        cpassword: '',
        password: '',
        // showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        if (prop === "cpassword")
            if (event.target.value !== "")
                if (values.password !== event.target.value) {
                    setcpasswordError("Password doesn't match")
                    return
                }
                else setcpasswordError("")
            else setcpasswordError("")
    };

    function ResetPassword(e) {
        e.preventDefault();
        if (values.password !== values.cpassword)
            setCredentialError("Both passwords should be match");
        else {
            setCredentials(<><br /><LinearProgressBar /></>);
            firebase.auth().signInWithEmailLink(params.email, window.location.href)
                .then((result) => {
                    console.log(result)
                })
            // firebase.database().ref('medicalPatients').orderByChild('email').equalTo(params.email).once("value", function (snapshot) {

            // const user = firebase.auth().currentUser;
            // console.log(user)
            setTimeout(() => {
                // TODO(you): prompt the user to re-provide their sign-in credentials
                // const credential = promptForCredentials();

                // user.reauthenticateWithCredential(credential).then(() => {
                //     // User re-authenticated.
                // }).catch((error) => {
                //     // An error ocurred
                //     // ...
                // });
            }, 3000);
        }
    }
    return (
        <div className="container1">
            <div
                className="root"
                id="login-form">
                <Paper elevation={3} className="paper">
                    <h3
                        className="heading"
                    >Create New Password</h3>
                    <form id="profileInputForm1"
                        onSubmit={ResetPassword}
                    >
                        <span id="required-mark">{passwordError}</span>
                        <div className="form-group col-md-12">
                            <input
                                type="password"
                                className="col"
                                id="loginpassword"
                                placeholder="Password *"
                                autoComplete="off"
                                value={values.password}
                                onChange={handleChange('password')}
                                required
                            />
                            {/* <span id="password-error" className="col" style={{ color: 'red' }}></span> */}
                        </div>
                        <div className="form-group col-md-12">
                            <input
                                type="password"
                                className=""
                                id="cpassword"
                                placeholder="Confirm Password *"
                                required
                                autocomplete="on"
                                value={values.cpassword}
                                onChange={handleChange('cpassword')}
                            />
                            <span id="required-mark">{cpasswordError}</span>
                        </div>
                        <div className="form-group col-md-12">
                            <input type="submit"
                                className="btnLogin"
                                value="Reset" />
                            <br /><span id="">{credentials}</span>
                        </div>
                        <br /><span id="required-mark">{credentialError}</span>
                        <div className="form-group"></div>
                    </form>
                </Paper>
            </div>
        </div>
    )
}
export default UpdatePassword

// import React from "react";
// import { firebaseConfig as firebase } from "../../config";
// import { useHistory } from 'react-router-dom';
// import LinearProgressBar from "../ProgressBars/LinearProgressBar"
// import { makeStyles } from '@material-ui/styles';


// const UpdatePassword = () => {
//     const classes = useStyles();
//     document.title = "Login to Abaadee Admin Panel";
//     const errors = {}
//     // const [credentials, setCredentials] = useState();
//     // const [credentialError, setCredentialError] = useState();
//     // const history = useHistory();

//     // const [values, setValues] = useState({
//     //     username: '',
//     //     password: '',
//     //     // showPassword: false,
//     // });
//     const handleChange = (prop) => (event) => {
//         // setValues({ ...values, [prop]: event.target.value });
//     };
//     const UserLogin = (userValues) => (e) => {
//         e.preventDefault();
//         // setCredentials(<><br /><LinearProgressBar /></>);
//         // setCredentialError("")
//         // setTimeout(() => {
//         // }, 3000);
//     }

//     return (
//         <div className="container1">
//             <div
//             className={classes.root}
//             id="login-form">
//                 <Paper elevation={3}>
//                     <h3
//                     className={classes.heading}
//                     >
//                         Login to Abaadee Admin Panel</h3>
//                     <form id="profileInputForm1"
//                     // onSubmit={UserLogin(values)}
//                     >
//                         <div className="form-group col-md-12">
//                             <span id="required-mark">{errors.email && errors.email}</span>
//                             <input
//                                 className=""
//                                 id="username"
//                                 placeholder="Username"
//                                 required
//                                 autocomplete="on"
//                                 // value={values.username}
//                                 onChange={handleChange('username')}
//                             />
//                             <span id="email-error" style={{ color: 'red' }}></span>
//                         </div>
//                         <div className="form-group col-md-12">
//                             <input
//                                 type="password"
//                                 className="col"
//                                 id="loginpassword"
//                                 placeholder="Password"
//                                 // value={values.password}
//                                 onChange={handleChange('password')}
//                                 required
//                             />
//                             <span id="password-error" className="col" style={{ color: 'red' }}></span>
//                         </div>
//                         <div className="form-group col-md-12">
//                             <input type="submit"
//                             className={`${classes.btnLogin} btn-lg`}
//                             value="Login" />
//                             {/* <br /><span id="">{credentials}</span> */}
//                         </div>
//                         {/* <br /><span id="required-mark">{credentialError}</span> */}
//                         <div className="form-group"></div>
//                     </form>
//                 </Paper>
//             </div>
//         </div>
//     )
// }
// export default UpdatePassword