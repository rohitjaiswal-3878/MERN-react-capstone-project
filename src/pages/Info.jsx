import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import profileImg from "../assets/profileImg.png";
import partlyCloudy from "../assets/partly-cloudy.png";
import { useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "90%",
          width: "60%",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "60%",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "55%",
              height: "100%",
            }}
          >
            <UserData />
            <WeatherData />
          </div>
          <div
            style={{
              width: "45%",
            }}
          >
            <NotePad />
          </div>
        </div>
        <div
          style={{
            height: "30%",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <Timer />
        </div>
      </div>
      <div
        style={{
          height: "90%",
          width: "18%",
        }}
      >
        <NewsData />
      </div>
      <button
        onClick={() => {
          navigate("/movies");
        }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "25px",
          width: "120px",
          padding: "6px 0px",
          borderRadius: "15px",
          backgroundColor: "#148A08",
          color: "white",
          outline: "none",
          border: "none",
        }}
      >
        Browse
      </button>
    </div>
  );
}

const Timer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const increaseSecond = () => {
    setTime((prev) => (prev = prev + 1));
  };
  const decreaseSecond = () => {
    if (time > 0) {
      setTime((prev) => (prev = prev - 1));
    }
  };
  const increaseMinute = () => {
    setTime((prev) => (prev = prev + 60));
  };
  const decreaseMinute = () => {
    if (time >= 60) {
      setTime((prev) => (prev = prev - 60));
    }
  };
  const increaseHour = () => {
    setTime((prev) => (prev = prev + 3600));
  };
  const decreaseHour = () => {
    if (time >= 3600) {
      setTime((prev) => (prev = prev - 3600));
    }
  };

  const formatTime = (time) => {
    const hours = parseInt(time / 3600);
    const minutes = parseInt((time % 3600) / 60);
    const seconds = parseInt((time % 3600) % 60);
    return (
      <p>
        {hours}:{minutes}:{seconds}
      </p>
    );
  };
  return (
    <div
      style={{
        height: "100%",
        borderRadius: "10px",
        width: "92%",
        margin: "40px 25px",
        boxSizing: "border-box",
        display: "flex",
        background: "#1E2343",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "10px",
          borderRadius: "50%",
          boxShadow: "0px 0px 10px 5px black inset",
          fontSize: "30px",
        }}
      >
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={time}
          colors={["#FF6A6A"]}
          size={120}
          strokeWidth={5}
        >
          {({ remainingTime }) => formatTime(remainingTime)}
        </CountdownCircleTimer>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "content",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "#949494",
              }}
            >
              Hours
            </span>
            <button
              onClick={increaseHour}
              style={{
                outline: "none",
                width: "10px",
                height: "10px",
                borderBottom: "10px solid #949494",
                borderRight: "10px solid  transparent",
                borderLeft: "10px solid  transparent",
                backgroundColor: "transparent",
                borderTop: "10px solid  transparent",
              }}
            ></button>
            <span style={{ fontSize: "35px" }}>
              {parseInt(time / 3600) > 9
                ? parseInt(time / 3600)
                : "0" + parseInt(time / 3600)}
            </span>
            <button
              onClick={decreaseHour}
              style={{
                outline: "none",
                width: "10px",
                height: "10px",
                borderTop: "10px solid #949494",
                borderRight: "10px solid  transparent",
                borderLeft: "10px solid  transparent",
                backgroundColor: "transparent",
                borderBottom: "10px solid  transparent",
              }}
            ></button>
          </div>
          <span
            style={{
              marginTop: "25px",
              fontSize: "35px",
            }}
          >
            :
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "content",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "#949494",
              }}
            >
              Minutes
            </span>
            <button
              onClick={increaseMinute}
              style={{
                outline: "none",
                width: "10px",
                height: "10px",
                borderBottom: "10px solid #949494",
                borderRight: "10px solid  transparent",
                borderLeft: "10px solid  transparent",
                backgroundColor: "transparent",
                borderTop: "10px solid  transparent",
              }}
            ></button>
            <span style={{ fontSize: "35px" }}>
              {parseInt((time % 3600) / 60) > 9
                ? parseInt((time % 3600) / 60)
                : "0" + parseInt((time % 3600) / 60)}
            </span>
            <button
              onClick={decreaseMinute}
              style={{
                outline: "none",
                width: "10px",
                height: "10px",
                borderTop: "10px solid #949494",
                borderRight: "10px solid  transparent",
                borderLeft: "10px solid  transparent",
                backgroundColor: "transparent",
                borderBottom: "10px solid  transparent",
              }}
            ></button>
          </div>
          <span
            style={{
              marginTop: "25px",
              fontSize: "35px",
            }}
          >
            :
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "content",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                color: "#949494",
              }}
            >
              Seconds
            </span>
            <button
              onClick={increaseSecond}
              style={{
                outline: "none",
                width: "10px",
                height: "10px",
                borderBottom: "10px solid #949494",
                borderRight: "10px solid  transparent",
                borderLeft: "10px solid  transparent",
                backgroundColor: "transparent",
                borderTop: "10px solid  transparent",
              }}
            ></button>
            <span style={{ fontSize: "35px" }}>
              {parseInt((time % 3600) % 60) > 9
                ? parseInt((time % 3600) % 60)
                : "0" + parseInt((time % 3600) % 60)}
            </span>
            <button
              onClick={decreaseSecond}
              style={{
                outline: "none",
                width: "10px",
                height: "10px",
                borderTop: "10px solid #949494",
                borderRight: "10px solid  transparent",
                borderLeft: "10px solid  transparent",
                backgroundColor: "transparent",
                borderBottom: "10px solid  transparent",
              }}
            ></button>
          </div>
        </div>
        <button
          disabled={isPlaying}
          onClick={() => setIsPlaying(true)}
          style={{
            width: "100%",
            backgroundColor: "#FF6A6A",
            borderRadius: "20px",
            color: "white",
            padding: "5px 0px",
            border: "none",
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

const UserData = () => {
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  const movies = JSON.parse(localStorage.getItem("selectedMovie"));

  return (
    <div
      style={{
        borderRadius: "10px",
        margin: "25px 25px 10px 25px",
        padding: "15px",
        maxHeight: "55%",
        display: "flex",
        gap: "20px",
        alignItems: "center",
        backgroundColor: "#5746EA",
      }}
    >
      <img
        src={profileImg}
        alt="profile"
        style={{
          height: "100%",
        }}
      />
      <div>
        <p
          style={{
            marginTop: "5px",
          }}
        >
          {userDetails.name}
        </p>
        <p
          style={{
            marginTop: "5px",
          }}
        >
          {userDetails.email}
        </p>
        <p
          style={{
            marginTop: "5px",
            fontSize: "24px",
            fontWeight: "550",
          }}
        >
          {userDetails.mobile}
        </p>
        <p
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            fontSize: "12px",
            marginTop: "25px",
          }}
        >
          {movies.map((movie, index) => (
            <p
              key={index}
              style={{
                padding: "4px 11px",
                width: "70px",
                borderRadius: "20px",
                backgroundColor: "#9F94FF",
              }}
            >
              {movie}
            </p>
          ))}
        </p>
      </div>
    </div>
  );
};

const WeatherData = () => {
  const [weather, setWeather] = useState({
    location: {
      city: "Sunnyvale",
      woeid: 2502265,
      country: "United States",
      lat: 37.371609,
      long: -122.038254,
      timezone_id: "America/Los_Angeles",
    },
    current_observation: {
      pubDate: 1717467775,
      wind: {
        chill: 68,
        direction: "NW",
        speed: 6,
      },
      atmosphere: {
        humidity: 54,
        visibility: 10,
        pressure: 1015.2,
      },
      astronomy: {
        sunrise: "5:48 AM",
        sunset: "8:26 PM",
      },
      condition: {
        temperature: 70,
        text: "Partly Cloudy",
        code: 30,
      },
    },
    forecasts: [
      {
        day: "Mon",
        date: 1717516800,
        high: 79,
        low: 56,
        text: "Sunny",
        code: 32,
      },
      {
        day: "Tue",
        date: 1717603200,
        high: 90,
        low: 56,
        text: "Sunny",
        code: 32,
      },
      {
        day: "Wed",
        date: 1717689600,
        high: 91,
        low: 60,
        text: "Sunny",
        code: 32,
      },
      {
        day: "Thu",
        date: 1717776000,
        high: 84,
        low: 56,
        text: "Sunny",
        code: 32,
      },
      {
        day: "Fri",
        date: 1717862400,
        high: 85,
        low: 55,
        text: "Partly Cloudy",
        code: 30,
      },
      {
        day: "Sat",
        date: 1717948800,
        high: 80,
        low: 59,
        text: "Partly Cloudy",
        code: 30,
      },
      {
        day: "Sun",
        date: 1718035200,
        high: 75,
        low: 58,
        text: "Partly Cloudy",
        code: 30,
      },
      {
        day: "Mon",
        date: 1718121600,
        high: 79,
        low: 59,
        text: "Mostly Sunny",
        code: 34,
      },
      {
        day: "Tue",
        date: 1718208000,
        high: 84,
        low: 60,
        text: "Mostly Cloudy",
        code: 28,
      },
      {
        day: "Wed",
        date: 1718294400,
        high: 80,
        low: 59,
        text: "Mostly Sunny",
        code: 34,
      },
      {
        day: "Thu",
        date: 1718380800,
        high: 77,
        low: 56,
        text: "Mostly Sunny",
        code: 34,
      },
    ],
  });

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     const url =
  //       "https://yahoo-weather5.p.rapidapi.com/weather?location=mumbai&format=json&u=f";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "65fd3861fdmshd066c8859705509p1b83bbjsn224280ccf5ca",
  //         "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       setWeather(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchWeather();
  // }, []);

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  let currentTime = `${hours}:${minutes}:${seconds}`;
  return weather ? (
    <div
      style={{
        borderRadius: "10px",
        margin: "10px 25px 25px 25px",
        maxHeight: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#FF4ADE",
          borderStartStartRadius: "10px",
          borderStartEndRadius: "10px",
          fontSize: "20px",
          padding: "5px 0px",
          maxHeight: "20%",
        }}
      >
        <p>{currentDate}</p>
        <p>{currentTime}</p>
      </div>
      <div
        style={{
          backgroundColor: "#101744",
          borderEndEndRadius: "10px",
          borderEndStartRadius: "10px",
          display: "flex",
          justifyContent: "space-evenly",
          fontSize: "10px",
          padding: "10px 0",
          maxHeight: "80%",
        }}
      >
        <p
          style={{
            width: "30%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "0px",
          }}
        >
          <img
            src={partlyCloudy}
            alt="icon"
            style={{ height: "40px", width: "40px" }}
          />
          {weather.current_observation.condition.text}
        </p>
        <div
          style={{
            width: "30%",
            textAlign: "center",
            borderRight: "1px solid white",
            borderLeft: "1px solid white",
          }}
        >
          <p
            style={{
              fontSize: "25px",
              marginTop: "5px",
            }}
          >
            {weather.current_observation.condition.temperature}&deg;C
          </p>
          <p style={{}}>
            {weather.current_observation.atmosphere.pressure} mber
            <br />
            pressure
          </p>
        </div>
        <div
          style={{
            width: "30%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <p>{weather.current_observation.wind.speed} km/h wind</p>
          <p>{weather.current_observation.atmosphere.humidity}% humidity</p>
        </div>
      </div>
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
        borderRadius: "10px",
        width: "100%",
        padding: "20px 0px",
        height: "95%",
      }}
    >
      <div
        style={{
          borderRadius: "15px",
          height: "100%",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "63%",
            position: "relative",
          }}
        >
          <img
            src={news.items[0].images.thumbnailProxied}
            alt="banner"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderStartEndRadius: "15px",
              borderStartStartRadius: "15px",
            }}
          />
          <p
            style={{
              position: "absolute",
              bottom: "0px",
              padding: "15px",
              fontSize: "20px",
              backgroundColor: "#000000BD",
            }}
          >
            {news.items[0].title}
          </p>
        </div>
        <p
          style={{
            padding: "15px",
            color: "black",
            fontSize: "15px",
            lineHeight: "1.7",
          }}
        >
          {news.items[0].snippet}
        </p>
      </div>
    </div>
  ) : null;
};

const NotePad = () => {
  const [data, setData] = useState(localStorage.getItem("notes") ?? "");
  return (
    <textarea
      style={{
        width: "90%",
        height: "100%",
        margin: "25px 25px 10px 0px",
        backgroundColor: "#F1C75B",
        borderRadius: "10px",
        padding: "25px",
        boxSizing: "border-box",
        outline: "none",
        border: "2px solid #F1C75B",
      }}
      value={data}
      onChange={(e) => {
        localStorage.setItem("notes", e.target.value);
        setData(e.target.value);
      }}
      name=""
      id=""
    ></textarea>
  );
};
export default Info;
