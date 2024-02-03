const TopTexts = () => {

    const data = [
        {
            id: 1,
            text: "Track your progress with the free 'My Learning' program here at W3Schools."
        },
        {
            id: 2,
            text: "Log in to your account, and start earning points."
        },
        {
            id: 3,
            text: "This is an optional feature, you can study at W3Schools without using My Learning"
        },
    ]

  return <div>
    <h1 className="text-3xl lg:text-4xl mb-4 font-semibold">My Learning</h1>
    <div>
        {
            data.map((item) => (
                <div key={item.id}>
                    <p className="text-sm lg:text-base font-semibold leading-9">{item.text}</p>
                </div>
            ))
        }
    </div>
  </div>;
};

export default TopTexts;
