import React, { useEffect, useState } from "react";

function Info() {
  return (
    <div>
      <UserData />
      <WeatherData />
      <NewsData />
    </div>
  );
}
const UserData = () => {
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  const movies = JSON.parse(localStorage.getItem("selectedMovie"));

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        margin: "10px",
        padding: "10px",
        display: "inline-block",
      }}
    >
      <h1>User data</h1>
      <p>{userDetails.name}</p>
      <p>{userDetails.email}</p>
      <p>{userDetails.mobile}</p>
      <p>
        {movies.map((movie, index) => (
          <p key={index}>{movie}</p>
        ))}
      </p>
    </div>
  );
};

const WeatherData = () => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchWeather = async () => {
      const url =
        "https://yahoo-weather5.p.rapidapi.com/weather?location=mumbai&format=json&u=f";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "65fd3861fdmshd066c8859705509p1b83bbjsn224280ccf5ca",
          "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setWeather(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather();
  }, []);

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}/${month}/${year}`;
  let currentTime = `${hours}:${minutes}:${seconds}`;
  return weather ? (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        margin: "10px",
        padding: "10px",
        display: "inline-block",
      }}
    >
      <h1>Weather Data</h1>
      <p>{currentDate}</p>
      <p>{currentTime}</p>
      <p>Wind Speed: {weather.current_observation.wind.speed}</p>
      <p>Humidity: {weather.current_observation.atmosphere.humidity}</p>
      <p>Pressure: {weather.current_observation.atmosphere.pressure}</p>
      <p>Temperature: {weather.current_observation.condition.temperature}</p>
    </div>
  ) : null;
};

const NewsData = () => {
  const [news, setNews] = useState({
    status: "success",
    items: [
      {
        title: "Mexico election 2024: Live updates, results and latest news",
        snippet:
          "Results are expected soon in Mexico's 2024 presidential election. Two women lead the polls: Claudia Sheinbaum, the former mayor of Mexico City, and Xóchitl ...",
        publisher: "The Associated Press",
        timestamp: "1717377900000",
        newsUrl: "https://apnews.com/live/mexico-election-results-updates",
        images: {
          thumbnail:
            "https://news.google.com/api/attachments/CC8iK0NnNHdWRzUyWlRCd1RXMVVXSE5QVFJDZkF4ampCU2dLTWdZdGxJNlBPUVk=-w280-h168-p-df-rw",
          thumbnailProxied:
            "https://i.zedtranslate.com/newsimage/CC8iK0NnNHdWRzUyWlRCd1RXMVVXSE5QVFJDZkF4ampCU2dLTWdZdGxJNlBPUVk",
        },
        hasSubnews: true,
        subnews: [
          {
            title:
              "Mexico election live updates: Voters set to elect first female president",
            snippet:
              "Mexico is expected to elect its first woman president Sunday as millions head to the polls to vote for national and local candidates.",
            publisher: "CNN",
            timestamp: "1717378440000",
            newsUrl:
              "https://www.cnn.com/americas/live-news/mexico-presidential-election-results-06-02-24/index.html",
            images: {
              thumbnail:
                "https://news.google.com/api/attachments/CC8iL0NnNUJSbTFUTWtWWlYzVlNjSE5xVFJDZkF4amlCU2dLTWdtSllaU2xxcWMxNmdF=-w280-h168-p-df-rw",
              thumbnailProxied:
                "https://i.zedtranslate.com/newsimage/CC8iL0NnNUJSbTFUTWtWWlYzVlNjSE5xVFJDZkF4amlCU2dLTWdtSllaU2xxcWMxNmdF",
            },
          },
          {
            title:
              "Exit polls show Sheinbaum thumping challenger in Mexico by nearly 30 points",
            snippet:
              "Two new exit polls show Claudia Sheinbaum with a commanding lead over her challenger Xochitl Galvez for Mexican president.",
            publisher: "The Times of Israel",
            timestamp: "1717381004000",
            newsUrl:
              "https://www.timesofisrael.com/liveblog_entry/exit-polls-show-sheinbaum-thumping-challenger-in-mexico-by-nearly-30-points/",
            images: {
              thumbnail:
                "https://news.google.com/api/attachments/CC8iK0NnNHpNRUY0WWtSd0xUUkJZekZXVFJERUF4aW1CU2dLTWdZTklJNkdIQW8=-w280-h168-p-df-rw",
              thumbnailProxied:
                "https://i.zedtranslate.com/newsimage/CC8iK0NnNHpNRUY0WWtSd0xUUkJZekZXVFJERUF4aW1CU2dLTWdZTklJNkdIQW8",
            },
          },
          {
            title:
              "What to know about Mexico's historic elections Sunday that will likely put a woman in power",
            snippet:
              "MEXICO CITY (AP) — Mexicans will vote Sunday in historic elections weighing gender, democracy and populism, as they chart the country's path forward in ...",
            publisher: "The Associated Press",
            timestamp: "1716952020000",
            newsUrl:
              "https://apnews.com/article/mexico-elections-explainer-claudia-sheinbaum-xochitl-galvez-59fc84d8e757675ea9c5110f700e09bc",
            images: {
              thumbnail:
                "https://news.google.com/api/attachments/CC8iJ0NnNUZiVWcwZFhsRlpGbFpNbkpUVFJDUEF4alhCQ2dLTWdNQkFBWQ=-w280-h168-p-df-rw",
              thumbnailProxied:
                "https://i.zedtranslate.com/newsimage/CC8iJ0NnNUZiVWcwZFhsRlpGbFpNbkpUVFJDUEF4alhCQ2dLTWdNQkFBWQ",
            },
          },
          {
            title:
              "Mexico's ruling party declares Sheinbaum winner of presidential vote",
            snippet:
              "MEXICO CITY, June 2 - Media outlets and the ruling party declared Claudia Sheinbaum the winner of Mexico's presidential election after polls closed on ...",
            publisher: "Reuters Canada",
            timestamp: "1717354090000",
            newsUrl:
              "https://www.reuters.com/world/americas/mexicans-vote-election-seen-crowning-first-female-president-2024-06-02/",
            images: {
              thumbnail:
                "https://news.google.com/api/attachments/CC8iL0NnNVRNRlpUYld0SFVWSnZPR1ozVFJERUF4aW1CU2dLTWdrQlFJcUNKR1p5VkFF=-w280-h168-p-df-rw",
              thumbnailProxied:
                "https://i.zedtranslate.com/newsimage/CC8iL0NnNVRNRlpUYld0SFVWSnZPR1ozVFJERUF4aW1CU2dLTWdrQlFJcUNKR1p5VkFF",
            },
          },
          {
            title:
              "Mexico Election: Sheinbaum to Win Presidency by Large Margin, Exit Polls Show",
            snippet:
              "Claudia Sheinbaum is set to become Mexico's first female leader in a landslide victory, capitalizing on outgoing President Andres Manuel Lopez Obrador's ...",
            publisher: "Bloomberg",
            timestamp: "1717380240000",
            newsUrl:
              "https://www.bloomberg.com/news/articles/2024-06-03/sheinbaum-to-win-mexico-vote-by-large-margin-exit-polls-show?srnd=economics-v2",
            images: {
              thumbnail:
                "https://news.google.com/api/attachments/CC8iK0NnNVVWekprTldwS1ZVUkpWSFpYVFJERUF4aW1CU2dLTWdhbEVvek5sUW8=-w280-h168-p-df-rw",
              thumbnailProxied:
                "https://i.zedtranslate.com/newsimage/CC8iK0NnNVVWekprTldwS1ZVUkpWSFpYVFJERUF4aW1CU2dLTWdhbEVvek5sUW8",
            },
          },
        ],
      },
    ],
  });

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     const url = "https://google-news13.p.rapidapi.com/latest?lr=en-US";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "65fd3861fdmshd066c8859705509p1b83bbjsn224280ccf5ca",
  //         "X-RapidAPI-Host": "google-news13.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       setNews(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchNews();
  // }, []);

  return news ? (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        margin: "10px",
        padding: "10px",
      }}
    >
      <p>{news.items[0].title}</p>
      <p>{news.items[0].snippet}</p>
      <img
        src={news.items[0].images.thumbnailProxied}
        width={100}
        height={100}
        alt="banner"
      />
    </div>
  ) : null;
};
export default Info;
