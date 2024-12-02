import React from "react";
import MainLayout from "./MainLayout/MainLayout";
import UpLayout from "./UpLayout/UpLayout";

export default function Layout() {
    return (
        <div>
            <UpLayout />
            <MainLayout />
        </div>
    );
}
