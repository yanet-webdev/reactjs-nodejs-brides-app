import React, { useEffect, useState } from "react";
import EmptyStripe from "./EmptyStripe";

import axios from "axios";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

export default function Planning() {
  const [productPlans, setproductPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/productPlans");
        setLoading(false);
        setproductPlans(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <EmptyStripe />
      <section className="category" id="category">
        <div className="max-width">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="error">{error}</MessageBox>
          ) : (
            <div>
              <h2 className="plan-title">
                The Complete Guide to Planning a Wedding
              </h2>

              {productPlans.map((productPlan) => (
                <div>
                  <img
                    src={productPlan.image}
                    alt={productPlan.name}
                    width="100%"
                    height="500px"
                  ></img>
                </div>
              ))}
            </div>
          )}
          <div className="subtext">
            The question is popped, the ring is on, stars are in your eyes...but
            now what? With so many tasks to take care of and details to arrange,
            planning a wedding can seem overwhelming. But, if you give yourself
            enough time to plan and sort the tasks month by month with a
            wedding-planning checklist and wedding timeline, the job becomes
            more fun and less stressful.
          </div>
          <div className="subtext">
            Though 12 to 14 months is the ideal length for an engagement, every
            couple’s engagement time is different. (Brand once planned a wedding
            for a couple in a mere seven weeks.) If your engagement length is
            shorter, Brand’s advice is to condense the schedule. “If you’re
            getting married in six months, try to complete all the
            wedding-planning checklist tasks designated for month 12 to 6 in
            that very first month, and then you’ll be right on schedule with
            everything else,” she says.
          </div>
          <div className="subtext">
            Brand shared her expert insights to help create this 12-month
            wedding-planning checklist and timeline to help brides plan a
            stress-free path to <strong>“I do!”</strong>
          </div>
          <div className="subtext">
            <h2>Determine Your budget</h2>
            <p>
              It's time to do the math and crunch some not-so-fun numbers.
              Before you can start anything, you have to figure out who's paying
              for what and determine your wedding's bottom line. From there,
              you'll want to break down said budget—what's a priority? What's
              not?—and start allocating funds accordingly. (A little market
              research here comes in handy.) And since these numbers will change
              as you plan, it's smart to start a detailed spreadsheet from the
              get-go. This will help you keep track of your spending and make it
              easy to adjust numbers along the way.
            </p>
          </div>
          <div className="subtext">
            <h2>Make a Guest List</h2>
            <p>
              If only you could invite any and everyone, right? Chances are, you
              can't, which is why you have to put a cap on dishing out invites.
              When deciding your head count, consider your budget (how much can
              you afford?) and your venue (how many people does it fit?). Also,
              who's paying for what? From there, figure out how you're going to
              divvy up the list. If you and your partner are footing the bill,
              assume you'll get 70 percent of the invites, while both sets of
              parents will split the other 30. But if mom and dad are
              contributing, it's protocol to give all involved parties—your
              parents, your partner's parents, you as a couple—one third each.
              Next comes cutting, negotiating, and cutting some more until you
              reach a final number.
            </p>
          </div>
          <div className="subtext">
            <h2>Select the Venue</h2>
            <p>
              Okay, you know who you're marrying. Now the real question is
              where? Trust us: Choosing the venue is one of the most important
              decisions you'll make right now. Seriously, the location affects
              almost everything else, from how many people you invite to what
              kind of flowers go on the table. Chances are, it's also the
              biggest chunk of change you've put down, like ever. That's why you
              want to explore your options, visit the top contenders, and
              ultimately select a place that fits your guest count, style, and
              budget.
            </p>
          </div>
          <div className="subtext">
            <h2>Start Shopping for Your Wedding Dress</h2>
            <p>
              You may know exactly what you want or you might not, which is
              okay, too. To get you started, here's an ultimate guide to dress
              shopping. Also, visit these places in Chicago, Los Angeles, Miami,
              and New York City—because finding a gown may be a matter of trial
              and error, but finding a salon shouldn't be.
            </p>
          </div>
          <div className="subtext">
            <h2>Take Engagement Photos</h2>
            <p>
              Now is a great time to practice being in front of the camera,
              especially since most photographers include a session in your
              package. But don't fret: We have three tips for the camera shy.
            </p>
          </div>
          <div className="subtext">
            <h2>Start Looking at Invitations</h2>
            <p>
              The wedding invitation is a guest’s first impression of your big
              day. That’s why you want to put your best foot forward with a
              personalized preview. If you're going custom, start working with a
              graphic designer or stationer now to create your dream suite. If
              you're going for a less involved route, you can wait until the
              six-month mark. (Invites will be sent out just six to eight weeks
              prior to the big day.) Here are 12 of our favorite sites to look
              for invites.
            </p>
          </div>
          <div className="subtext">
            <h2>Hire the Ceremony Musicians</h2>
            <p>
              If you're enlisting the talents of a three-piece band, now's the
              time to do so. As for the actual music, we say don't go generic
              when you can go personal. Here are 100 song ideas for the
              processional, and 100 for the ever-important bridal march.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
