<?php
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        // following line retrieve all the user_ids from DB
        $users = App\Models\User::all()->pluck('id')->all();
        $categories = App\Models\Category::all()->pluck('id')->all();
        foreach (range(1, 50) as $index) {
            $company = App\Models\Post::create([
                'title' => $faker->company,
                'user_id' => $faker->randomElement($users),
                'category_id' => $faker->randomElement($categories),
                'content' => $faker->realText,
                'image' => $faker->imageUrl($width = 640, $height = 480),
                'view_counts' => rand(10,1000),
            ]);
        }
    }
}
