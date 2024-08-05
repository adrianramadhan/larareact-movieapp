<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_months' => 3,
                'features' => json_encode([
                    'feature_1' => 'Feature 1',
                    'feature_2' => 'Feature 2',
                    'feature_3' => 'Feature 3',
                ]),
            ],
            [
                'name' => 'Premium',
                'price' => 800000,
                'active_period_in_months' => 6,
                'features' => json_encode([
                    'feature_1' => 'Feature 1',
                    'feature_2' => 'Feature 2',
                    'feature_3' => 'Feature 3',
                    'feature_4' => 'Feature 4',
                    'feature_5' => 'Feature 5',
                ]),
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlans);

    }
}
