import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DefaultLayout from '../complexes/DefaultLayout';
import MainImage from '../basics/MainImage';

const AsideImageOuter = styled.figure`
  float: right;

  & > img {
    border: solid 1px #ccc;
    box-shadow: 0 0 1rem #0003;
  }
`;

const HomePage: React.FC = () => {
  return (
    <DefaultLayout className="HomePage">
      <h1>Welcome to My Great App!</h1>
      <p>
        Hi!
        My name is Ginpei Takanashi.
        I write JavaScript.
        I make JapaneseSushi.
      </p>
      <p>
        →
        <Link to="/about">About</Link>
      </p>
      <MainImage/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia magnam sunt? Sunt harum obcaecati, fuga consequatur, suscipit recusandae totam expedita modi facilis, officiis facere nihil dignissimos tenetur asperiores aut?</p>
      <AsideImageOuter>
        <img
          alt="Sushi on white plate."
          src="https://ginpei.info/static/images/makingSushi.jpg"
        />
      </AsideImageOuter>
      <p>Maxime similique officiis temporibus quasi eaque minus, quibusdam aspernatur repellat numquam nesciunt cumque ut fugiat inventore suscipit id molestias voluptate delectus ullam reiciendis quas quaerat magnam quos voluptates. Doloribus, eaque.</p>
      <p>Consectetur minus aliquam iste porro maxime corrupti obcaecati error corporis, pariatur eligendi repellat quae explicabo cumque repudiandae? Fugit maiores, consequuntur reiciendis accusamus praesentium qui perferendis quaerat sapiente mollitia maxime reprehenderit?</p>
      <p>Quibusdam iusto, quae consectetur quo animi aliquid qui voluptatem nihil eaque omnis, corrupti eveniet repellat voluptate officiis nesciunt. Accusantium nam et accusamus? Omnis similique sapiente inventore ea, vitae eligendi placeat!</p>
      <p>Nulla voluptate earum ipsa, alias sequi assumenda nihil facilis. Voluptates explicabo reprehenderit nulla molestias veritatis in eum omnis aperiam sapiente voluptatibus incidunt non quas sint est, ullam nam maxime obcaecati?</p>
      <p>Aut ipsam nam consequuntur beatae tempora impedit iure deserunt quod commodi dignissimos natus pariatur totam possimus est inventore porro hic ab praesentium culpa doloremque id, quos accusamus. Labore, vero assumenda.</p>
    </DefaultLayout>
  );
}

export default HomePage;
