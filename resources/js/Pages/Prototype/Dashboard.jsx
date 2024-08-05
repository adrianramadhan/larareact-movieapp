import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/Index.jsx";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
    const flicityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flicityOptions}>
                    {[1, 2, 3, 4].map((i) => {
                        return (
                            <FeaturedMovie
                                key={i}
                                slug="the-tomorrow-war"
                                name={`The Tomorrow War ${i}`}
                                category="Action, Sci-Fi"
                                thumbnail="https://image.tmdb.org/t/p/w500/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg"
                                rating={4.5}
                            />
                        );
                    })}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flicityOptions}>
                    {[1, 2, 3, 4].map((i) => {
                        return (
                            <MovieCard
                                key={i}
                                slug="the-tomorrow-war"
                                name={`The Tomorrow War ${i}`}
                                category="Action, Sci-Fi"
                                thumbnail="https://image.tmdb.org/t/p/w500/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg"
                            />
                        );
                    })}
                </Flickity>
            </div>
        </Authenticated>
    );
}
