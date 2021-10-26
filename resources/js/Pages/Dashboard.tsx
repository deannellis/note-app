import * as React from "react";

import PageLayout from "../Components/PageLayout";

const Dashboard = () => {
    let foo: string = "React";
    const bar: string = "TypeScript";

    return (
        <PageLayout>
            <h1>
                Hello bing bong {foo} + {bar}
            </h1>
        </PageLayout>
    );
};

export default Dashboard;
