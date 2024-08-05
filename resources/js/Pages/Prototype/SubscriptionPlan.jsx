import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";

export default function SubscriptionPlan() {
    return (
        <Authenticated>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* <!-- Basic --> */}
                    <SubscriptionCard
                        name={"Basic"}
                        price={"Free"}
                        durationInMonth={0}
                        features={[
                            "720p Resolution",
                            "Limited Access",
                            "No Device Limit",
                            "No Download",
                        ]}
                    />

                    {/* <!-- For Greatest --> */}
                    <SubscriptionCard
                        isPremium
                        name={"Premium"}
                        price={59000}
                        durationInMonth={1}
                        features={[
                            "1080p Resolution",
                            "Unlimited Access",
                            "No Device Limit",
                            "Download Available",
                        ]}
                    />
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </Authenticated>
    );
}
