// fortune_docker/frontend/src/components/datacalls/OneFortune.js
import React, { Component } from "react";
import { useQuery } from "react-query";
import regeneratorRuntime from 'regenerator-runtime';


export default function OneFortune() {

  const apiUrl = process.env.API_URL_FSS;
  const FORTUNE_URL = `${apiUrl}`;
  const TEST_KEY = process.env.TEST_KEY;

  // If fetch or this function stops working, regenerate and update the API Keys
  // The following is set up for samesite
  const fetchFortunes = async (key, checking) => {
    const config = {'X-Api-Key': TEST_KEY};
    const res = await fetch(FORTUNE_URL, {headers: config});
    return res.json([]);
  }

  const { data, status } = useQuery(['allfortunes', 'I fetched'], fetchFortunes, {retry: true});

  let funFortunes = data;

  if (status === 'loading') {
    return <span>, lemme get that fortune for you . . .</span>;
  } else if (status === 'error') {
    return <span> Error fetching data</span>;
  } else if (status === 'success' && Array.isArray(funFortunes) == true) {
    const fortuneItems = funFortunes.map(fortune => (
      <span key={fortune.title}>{fortune.body}</span>
    ));
    const randomId = Math.floor(Math.random() * fortuneItems.length);
    return (
      <>
        <span>{fortuneItems[randomId]}</span>
      </>
    );
  } else if ((status === 'success' && Array.isArray(funFortunes) == false))
  {
    return <span>, funFortunes was not an array.</span>;
  } else {
    return <span>, there is an unspecified issue.</span>;
  }
}
