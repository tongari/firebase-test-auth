import * as React from "react";
import * as ReactDOM from "react-dom";

import firebase from "firebase/app";
import firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import axios, { AxiosResponse, AxiosPromise, AxiosError } from "axios";
// import { Hoge, trace } from './modules/sub';
import * as sub from "./modules/sub";
import App from "./modules/App";

const h: sub.Hoge = new sub.Hoge();
h.hoge();
sub.trace("fuga");
const tongariArr: number[] = [1, 2, 4];
console.log(tongariArr.includes(4));

interface IInitData {
  apiKey: string;
  databaseURL: string;
  storageBucket: string;
  authDomain: string;
  messagingSenderId: string;
  projectId: string;
}

interface IResultData {
  data: IInitData;
}

function fetch<T>(url: string): AxiosPromise<T> {
  return new Promise((resolve, reject) => {
    console.log("fetch start!!!!!!!");
    axios
      .get<T>(url)
      .then((response: AxiosResponse<T>) => {
        setTimeout(() => {
          resolve(response);
        }, 3000);
      })
      .catch(() => {
        reject();
      });
  });
}

function settingAuthUI(): void {
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  const uiConfig = {
    callbacks: {
      // signInSuccessWithAuthResult: (authResult: any, redirectUrl:any ) => {
      signInSuccessWithAuthResult: () => {
        return true;
      },
      uiShown: () => {
        const dom = document.getElementById("js-loader");
        dom && (dom.style.display = "none");
      }
    },
    signInFlow: "popup",
    signInSuccessUrl: "./success.html",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  };
  ui.start("#js-firebaseui-auth-container", uiConfig);
}

async function execute(): Promise<any> {
  // const response: {data: IInitData} = await fetch<IInitData>('/__/firebase/init.json');
  const response: IResultData = await fetch<IInitData>(
    "/__/firebase/init.json"
  );
  console.log("fetch end!!!!!!!");
  firebase.initializeApp(response.data);
  settingAuthUI();
}

execute();

const app = document.getElementById("app");
ReactDOM.render(<App />, app);

const instance = axios.create();
instance.defaults.responseType = "text";

instance
  .get(
    "https://api.tokyometroapp.jp/api/v2/datapoints?rdf:type=odpt:StationFacility&acl:consumerKey="
  )
  .then(response => {
    console.log(response);
  })
  .catch((error: AxiosError) => {
    console.log("###################");
    console.log(error.response);
    console.log("###################");
  });

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.tokyometroapp.jp/api/v2/datapoints", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status >= 400) {
    console.log(xhr.response);
  }
};
xhr.onerror = () => {
  console.log(xhr.response);
};

xhr.send();
