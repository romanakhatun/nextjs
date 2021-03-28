import React from 'react';
import styles from './newsletter.module.scss';
import axios from "axios";
import { useState } from "react";

interface NewsletterProps {

}

const Newsletter: React.FC<NewsletterProps> = ({ }) => {
    const [email, setEmail] = useState("");
    const [state, setState] = useState("IDLE");
    const [errorMessage, setErrorMessage] = useState(null);

    const subscribe = async () => {
        setState("LOADING");
        setErrorMessage(null);
        try {
            const response = await axios.post("/api/newsletter", { email });
            setState("SUCCESS");
        } catch (e) {
            setErrorMessage(e.response.data.error);
            setState("ERROR");
        }
    };

    return (
        <div className={styles.newsletterBoxWrap}>
            <form action="">
                <input
                    type="text"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button
                    className={`${state === "LOADING" ? "btnLoading" : ""}`}
                    type="button"
                    disabled={state === "LOADING"}
                    onClick={subscribe}
                >
                    Subscribe
                </button>
                {state === "ERROR" && <p className={styles.errorMsg}><small>{errorMessage}</small> </p>}
                {state === "SUCCESS" && <p className={styles.thankMsg}><small>Thanks For Subscribe!!</small></p>}
            </form>
        </div>
    )
}

export default Newsletter;