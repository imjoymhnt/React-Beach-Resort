import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaBeer, FaHiking, FaShuttleVan } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: FaCocktail,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, eligendi fugiat perspiciatis laboriosam quia sapiente!",
      },
      {
        icon: FaHiking,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, eligendi fugiat perspiciatis laboriosam quia sapiente!",
      },
      {
        icon: FaShuttleVan,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, eligendi fugiat perspiciatis laboriosam quia sapiente!",
      },
      {
        icon: FaBeer,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, eligendi fugiat perspiciatis laboriosam quia sapiente!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
