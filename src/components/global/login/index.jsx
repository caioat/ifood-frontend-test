import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { LoginStyle } from "./Login_style";

export default function LoginComponent() {

    return <LoginStyle>
        <a href="https://accounts.spotify.com/authorize?client_id=58b105c3bef543ae978f7329e2f4905a&response_type=token&redirect_uri=http://localhost:3000/main">link text</a>
    </LoginStyle>
}
