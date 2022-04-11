import React from "react"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import { graphql } from "gatsby"
import Images from "../examples/Images"
import styled from "styled-components"
const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
            <Wrapper>
              <Images />
            </Wrapper>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/myyonkpq"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Featured</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
const Wrapper = styled.div`
  width: 200px;
  section {
    width: auto;
  }
`
export default Contact
