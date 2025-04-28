import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const flipBook = useRef();
  const flipSound = useRef(new Audio("/flip.mp3"));

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth > 600 ? 500 : window.innerWidth - 40,
    height: window.innerHeight > 800 ? 700 : window.innerHeight - 100,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth > 600 ? 500 : window.innerWidth - 40,
        height: window.innerHeight > 800 ? 700 : window.innerHeight - 100,
      });
    }
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  const pages = [
    {
      title: "Cover Page",
      content: (
        <>
        <div className="title-page">
          <h1 className="title">GameFuel:</h1>
            <h2 className="subtitle">
              A Dietary Guideline for Student-Athletes at Basud National High School
            </h2>
            <p className="tagline">Fuel Smart. Play Hard. Recover Strong.</p>
            <div className="authors">
              <p>by Joshua Abel Rawat</p>
              <p>and Girlie Villamar</p>
            </div>
        </div>
        </>
      )
    },
    {},
    {
      title: "Table of Contents",
      content: (
        <div className="toc-container">
          <h2 className="toc-title">TABLE OF CONTENTS</h2>
          <div className="toc-separator"></div>
          <ol className="toc">
            {[
              "1. Introduction",
              "2. Importance of Nutrition in Athletic Performance",
              "3. Nutritional Needs of Student-Athletes",
              "4. Scientifically-Backed Dietary Guidelines",
              "5. One-Month Meal Plan (With Portion Sizes & Intensity Levels)",
              "6. Hydration Strategies",
              "7. Pre-Game and Post-Game Nutrition",
              "8. Common Myths and Misconceptions",
              "9. Practical Tips for Busy Student-Athletes",
              "10. Final Recommendations",
            ].map((item, idx) => (
              <li key={idx}>
                <button
                  className="toc-button"
                  onClick={() => flipBook.current.pageFlip().flip(idx + 2)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ol>
        </div>
      ),     
    },
    {},
    {
      title: "Introduction",
      content: (
        <div className="introduction-page">
          <h2 className="introduction-title">Introduction</h2> {/* Placed above the box */}
          <div className="introduction-content">
            <p>
              Welcome to GameFuel, your complete nutrition guide designed to empower
              Basud National High School student-athletes. This eBook serves to
              provide practical, science-based nutrition advice to help you perform
              better, recover faster, and stay healthy. 📖
            </p>
          </div>
        </div>
      ),
    },
    {},
    {
      title: "Importance of Nutrition in Athletic Performance",
      content: (
        <div 
          className="nutrition-page" 
          style={{ 
            margin: "0 auto", // Centers the content horizontally
            width: "90%", // Ensures equal spacing on both sides
            textAlign: "left", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "flex-start" 
          }}
        >
          <img 
            src="/images/3.jpg" 
            alt="Nutrition and Athletic Performance" 
            style={{ 
              width: "100%", 
              height: "auto", 
              marginBottom: "10px", 
              marginTop: "-220px", 
              marginLeft: "3px",
              alignSelf: "flex-start" 
            }}
          />
          <h2>Importance of Nutrition in Athletic Performance</h2>
          <ul>
            <li>Nutrition fuels energy systems during training and games.</li>
            <li>Helps in muscle growth and recovery.</li>
            <li>Prevents injury and boosts immunity.</li>
            <li>Improves focus and academic performance.</li>
          </ul>
        </div>
      ),
      pageNumber: 2
    },
    {},
    {
      title: "Nutritional Needs of Student-Athletes",
      content: (
        <div className="nutrition-needs-page">
          <h2>Nutritional Needs of Student-Athletes</h2>
          <ul>
            <li>
              <strong>Macronutrients:</strong>
              <ul>
                <li>Carbohydrates (55–65%) – Primary energy source.</li>
                <li>Protein (12–15%) – Muscle repair and growth.</li>
                <li>Fats (20–30%) – Supports hormone production and recovery.</li>
              </ul>
            </li>
            <li>
              <strong>Micronutrients:</strong>
              <ul>
                <li>Iron, calcium, vitamin D, B-complex vitamins.</li>
              </ul>
            </li>
            <li>
              Calories: Varies by age, sex, and sport. Ranges from 2,000–3,500 kcal/day.
            </li>
          </ul>
        </div>
      ),
      pageNumber: 3
    },
    {},
    {
      title: "Chapter 4: Scientifically-Backed Dietary Guidelines",
      content: (
        <>
          <h2>Scientifically-Backed Dietary Guidelines</h2>
          <table className="meal-table">
            <thead>
              <tr>
                <th>Meal Timing</th>
                <th>What to Eat</th>
                <th>Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2–4 hrs before training</td>
                <td>Carbs + protein (e.g., rice + egg)</td>
                <td>Fuel energy stores</td>
              </tr>
              <tr>
                <td>30–60 min before</td>
                <td>Light carbs (banana, granola bar)</td>
                <td>Quick energy</td>
              </tr>
              <tr>
                <td>During (if &gt;60 min)</td>
                <td>Water or electrolyte drink</td>
                <td>Maintain hydration</td>
              </tr>
              <tr>
                <td>Post-Training (within 30 mins)</td>
                <td>Protein + carbs (chocolate milk, sandwich)</td>
                <td>Muscle recovery</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
      pageNumber: 4
    },
    {},
    {
      title: "One-Month Meal Plan",
      content: (
        <>
          <section id="week1" class="meal-plan">
            <h2>📅 One-Month Meal Plan</h2>

            <div class="day">
              <h3>Day 1 – Moderate Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Oatmeal, banana, boiled egg</li>
                <li><strong>Morning Snack:</strong> Peanut butter sandwich, water</li>
                <li><strong>Lunch:</strong> Chicken adobo, brown rice, side salad</li>
                <li><strong>Afternoon Snack:</strong> Apple, yogurt</li>
                <li><strong>Dinner:</strong> Grilled fish, sweet potato, steamed veggies</li>
                <li><strong>Hydration:</strong> 8–10 glasses water + electrolyte drink</li>
              </ul>
            </div>

            <div class="day">
              <h3>Day 2 – Moderate Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Oatmeal, banana, boiled egg</li>
                <li><strong>Morning Snack:</strong> Peanut butter sandwich, water</li>
                <li><strong>Lunch:</strong> Chicken adobo, brown rice, side salad</li>
                <li><strong>Afternoon Snack:</strong> Apple, yogurt</li>
                <li><strong>Dinner:</strong> Grilled fish, sweet potato, steamed veggies</li>
                <li><strong>Hydration:</strong> 8–10 glasses water + electrolyte drink</li>
              </ul>
            </div>

            <div class="day">
              <h3>Day 3 – Moderate Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Oatmeal, banana, boiled egg</li>
                <li><strong>Morning Snack:</strong> Peanut butter sandwich, water</li>
                <li><strong>Lunch:</strong> Chicken adobo, brown rice, side salad</li>
                <li><strong>Afternoon Snack:</strong> Apple, yogurt</li>
                <li><strong>Dinner:</strong> Grilled fish, sweet potato, steamed veggies</li>
                <li><strong>Hydration:</strong> 8–10 glasses water + electrolyte drink</li>
              </ul>
            </div>

          </section>

        </>
      ),
      pageNumber: 5
    },
    {},
    {
      title: "One-Month Meal Plan",
      content: (
        <>
          <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 4 – Moderate Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Oatmeal, banana, boiled egg</li>
                <li><strong>Morning Snack:</strong> Peanut butter sandwich, water</li>
                <li><strong>Lunch:</strong> Chicken adobo, brown rice, side salad</li>
                <li><strong>Afternoon Snack:</strong> Apple, yogurt</li>
                <li><strong>Dinner:</strong> Grilled fish, sweet potato, steamed veggies</li>
                <li><strong>Hydration:</strong> 8–10 glasses water + electrolyte drink</li>
              </ul>
            </div>
            <div class="day">
              <h3>Day 5 – Low Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Boiled egg, pandesal, hot cocoa</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, water</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola (soup with green papaya and spinach)</li>
                <li><strong>Hydration:</strong> 7–8 glasses water</li>
              </ul>
            </div>

            <div class="day">
              <h3>Day 6 – High Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

          </section>

        </>
      ),
      pageNumber: 6
    },
    {},
    {
      title: "One-Month Meal Plan",
      content: (
        <>
          <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 7 – Low Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Boiled egg, pandesal, hot cocoa</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, water</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola</li>
                <li><strong>Hydration:</strong> 7–8 glasses water</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 8 – Moderate Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 9 – Low Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Breakfast	Boiled egg, pandesal with cheese, banana, water</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, milk</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, steamed kangkong, water</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola, rice, sautéed sayote</li>
                <li><strong>Hydration:</strong> 7–8 glasses of water</li>
              </ul>
            </div>

          </section>

        </>
      ),
      pageNumber: 7
    },
    {},
    {
      title: "One-Month Meal Plan",
      content: (
        <>
          <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 10 – Moderate  Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Oatmeal with banana, boiled egg, water</li>
                <li><strong>Morning Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Lunch:</strong> Chicken adobo, brown rice, steamed vegetables</li>
                <li><strong>Afternoon Snack:</strong> Apple + yogurt</li>
                <li><strong>Dinner:</strong> Grilled fish, sweet potato, cucumber salad</li>
                <li><strong>Hydration:</strong> 8–10 glasses of water + electrolyte drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 11 – High Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 12 – High Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

          </section>

        </>
      ),
      pageNumber: 8
    },
    {},
    {
      title: "One-Month Meal Plan",
      content: (
        <>
          <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 13 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 14 – High Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 15 – Low Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Breakfast	Boiled egg, pandesal with cheese, banana, water</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, milk</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, steamed kangkong, water</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola, rice, sautéed sayote</li>
                <li><strong>Hydration:</strong> 7–8 glasses of water</li>
              </ul>
            </div>

          </section>

        </>
      ),
      pageNumber: 9
    },
    {},
    {
      title: "One-Month Meal Plan",
      content: (
        <>
          <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 16 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 17 – Low Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Boiled egg, pandesal with cheese, banana, water</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, milk</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, steamed kangkong, water</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola, rice, sautéed sayote</li>
                <li><strong>Hydration:</strong> 7–8 glasses of water</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 18 – Moderate Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Oatmeal with banana, boiled egg, water</li>
                <li><strong>Morning Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Lunch:</strong> Chicken adobo, brown rice, steamed vegetables</li>
                <li><strong>Afternoon Snack:</strong> Apple + yogurt</li>
                <li><strong>Dinner:</strong> Grilled fish, sweet potato, cucumber salad</li>
                <li><strong>Hydration:</strong> 8–10 glasses of water + electrolyte drink after training</li>
              </ul>
            </div>

          </section>

        </>
      ),
      pageNumber: 10
    },
    {},
    {
      title: "One-Month Meal Plan",
      content: (
        <>
          <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 19 – High Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 20 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 21 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

          </section>

        </>
      ),
      pageNumber: 11
    },
    {},
    {
      title: "One-Month Meal Plan",
      content: (
        <>
          <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 22 – Low Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Boiled egg, pandesal with cheese, banana, water</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, milk</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, steamed kangkong, water</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola, rice, sautéed sayote</li>
                <li><strong>Hydration:</strong> 7–8 glasses of water</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 23 – Moderate Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Oatmeal with banana, boiled egg, water</li>
                <li><strong>Morning Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Lunch:</strong> Chicken adobo, brown rice, steamed vegetables</li>
                <li><strong>Afternoon Snack:</strong> Apple + yogurt</li>
                <li><strong>Dinner:</strong> Grilled fish, sweet potato, cucumber salad</li>
                <li><strong>Hydration:</strong> 8–10 glasses of water + electrolyte drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 24 – Moderate Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Oatmeal with banana, boiled egg, water</li>
                <li><strong>Morning Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Lunch:</strong> Chicken adobo, brown rice, steamed vegetables</li>
                <li><strong>Afternoon Snack:</strong> Apple + yogurt</li>
                <li><strong>Dinner:</strong> Grilled fish, sweet potato, cucumber salad</li>
                <li><strong>Hydration:</strong> 8–10 glasses of water + electrolyte drink after training</li>
              </ul>
            </div>

          </section>

        </>
      ),
      pageNumber: 12
    },
    {},
    {
      title: "One-Month Meal Plan",
      content: (
        <>
          <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 25 – Low Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Boiled egg, pandesal with cheese, banana, water</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, milk</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, steamed kangkong, water</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola, rice, sautéed sayote</li>
                <li><strong>Hydration:</strong> 7–8 glasses of water</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 26 – Moderate Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Boiled egg, pandesal with cheese, banana, water</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, milk</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, steamed kangkong, water</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola, rice, sautéed sayote</li>
                <li><strong>Hydration:</strong> 7–8 glasses of water</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 27 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

          </section>

        </>
      ),
      pageNumber: 13
    },
    {},
    {
      title: "One-Month Meal Plan",
      content: (
        <>
          <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 28 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 29 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 27 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

          </section>

        </>
      ),
      pageNumber: 14
    },
    {},
    {
      title: "Hydration Strategies",
      content: (
      <>
        <h2>Hydration Strategies</h2>
        <ul>
          <li>Drink 250–500 mL of water two hours before activity.</li>
          <li>Sip 100–150 mL of water every 20 minutes during training.</li>
          <li>For events longer than 60 minutes, include electrolytes (sports drinks or oral rehydration salts).</li>
          <li>Check urine color — pale yellow indicates good hydration.</li>
        </ul>
      </>
      ),
      pageNumber: 15
    },
    {},
    {
      title: "Pre-Game and Post-Game Nutrition",
      content: (
      <>
        <h2>Pre-Game and Post-Game Nutrition</h2>
        <h5>Before Game:</h5>
        <ul>
          <li>3 hours before: Rice + lean meat + fruits</li>
          <li>30 mins before: Banana + water</li>
        </ul>
        <h5>After Game:</h5>
        <ul>
          <li>Within 30 minutes: Chocolate milk, sandwich</li>
          <li>1–2 hours after: Balanced meal (carbs + protein + vegetables)</li>
        </ul>
      </>
      ),
      pageNumber: 16
    },
    {},
    {
      title: "Common Nutrition Myths",
      content: (
      <>
        <h2>Common Nutrition Myths</h2>
        <ul>
          <li>❌ “Skipping breakfast makes you lighter for sports.”</li>
          <li>✅ Truth: Skipping breakfast drains energy stores and hinders performance.</li>
          <li>❌ “More protein = more muscle.”</li>
          <li>✅ Truth: Excess protein won’t build muscle without proper training.</li>
        </ul>
      </>
      ),
      pageNumber: 17
    },
    {},
    {
      title: "Practical Tips for Busy Student-Athletes",
      content: (
      <>
        <h2>Practical Tips for Busy Student-Athletes</h2>
        <ul>
          <li>Pack healthy snacks: boiled eggs, trail mix, fruits.</li>
          <li>Avoid energy drinks and sugary sodas.</li>
          <li>Eat rainbow-colored fruits and vegetables daily.</li>
          <li>Don’t skip meals—even on rest days.</li>
        </ul>
      </>
      ),
      pageNumber: 18
    },
    {},
    {
      title: "Final Recommendations",
      content: (
      <>
        <h2>Final Recommendations</h2>
        <ul>
          <li>Make small, consistent changes.</li>
          <li>Stay hydrated throughout the day.</li>
          <li>Listen to your body.</li>
          <li>Prioritize sleep and recovery.</li>
          <li>Seek help from coaches, teachers, or health professionals when unsure</li>
        </ul>
      </>
      ),
      pageNumber: 19
    },
    {},
    {
      title: "The End",
      content: (
        <>
          <h2>Thank You for Reading!</h2>
          <br></br>
          <h4>Download Link for PDF</h4>
          <a href="/ebook_content.pdf"
            download="GameFuel_Ebook.pdf"
            target="_blank"
            rel="noopener noreferrer">
            Click here to download the PDF version of this eBook.
          </a>
        </>
      ),
      pageNumber: 20
    }
  ];

  const handleStart = () => {
    setIsOpen(true);
  };

  const onFlip = () => {
    flipSound.current.currentTime = 0;
    flipSound.current.play();
  };

  return (
    <div className="app">
      {!isOpen ? (
        <div className="book-cover" onClick={handleStart}>
          <div className="cover-content">
            <h1 className="title">GameFuel:</h1>
            <h2 className="subtitle">
              A Dietary Guideline for Student-Athletes at Basud National High School
            </h2>
            <p className="tagline">Fuel Smart. Play Hard. Recover Strong.</p>
          </div>
        </div>
      ) : (
        <HTMLFlipBook
          width={dimensions.width}
          height={dimensions.height}
          size="stretch"
          minWidth={315}
          maxWidth={500}
          minHeight={400}
          maxHeight={500}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={false}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          showCover={true}
          mobileScrollSupport={true}
          // onFlip={onFlip}
          ref={flipBook}
          className="flip-book"
        >
          {pages.map((page, index) => (
            <div key={index} className="page">
              {typeof page.content === "string" ? (
                <>
                  <h2>{page.title}</h2>
                  <p>{page.content}</p>
                </>
              ) : (
                page.content
              )}
              <div className="page-number">{page.pageNumber}</div>
            </div>
          ))}
        </HTMLFlipBook>

        
      )}
      {isOpen && (
        <button
          className="close-book-button"
          onClick={() => {
            flipBook.current.pageFlip().flip(0);
            setTimeout(() => setIsOpen(false), 1000);
          }}
        >
          Close Book
        </button>
      )}
    </div>
  );
}

export default App;
