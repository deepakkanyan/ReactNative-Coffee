import { CoffeeModel } from './CoffeeModel';

export const famousCoffees: CoffeeModel[] = [
  {
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    title: 'Espresso',
    description:
      'A strong, concentrated coffee shot, served plain, forming the base of many coffee drinks.',
    ingredients: ['Finely ground coffee beans', 'Water'],
    id: 'espresso',
  },
  {
    image:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80',
    title: 'Americano',
    description:
      'Espresso diluted with hot water, resulting in a lighter but rich coffee.',
    ingredients: ['Espresso', 'Hot water'],
    id: 'americano',
  },
  {
    image:
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    title: 'Cappuccino',
    description:
      'A classic Italian coffee drink with equal parts espresso, steamed milk, and milk foam.',
    ingredients: ['Espresso', 'Steamed milk', 'Milk foam'],
    id: 'cappuccino',
  },
  {
    image:
      'https://images.unsplash.com/photo-1438786657495-640937046d18?auto=format&fit=crop&w=400&q=80',
    title: 'Latte',
    description:
      'A creamy coffee drink blending espresso with lots of steamed milk and a touch of foam.',
    ingredients: ['Espresso', 'Steamed milk', 'Milk foam'],
    id: 'latte',
  },
  {
    image:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80',
    title: 'Mocha',
    description:
      'A chocolate-flavored variant of a latte with espresso, steamed milk, chocolate, and whipped cream.',
    ingredients: [
      'Espresso',
      'Steamed milk',
      'Chocolate syrup',
      'Whipped cream',
    ],
    id: 'mocha',
  },
  {
    image:
      'https://images.unsplash.com/photo-1523983303491-35a1e42547e4?auto=format&fit=crop&w=400&q=80',
    title: 'Macchiato',
    description:
      "An espresso 'stained' with a small amount of milk or milk foam.",
    ingredients: ['Espresso', 'Milk foam'],
    id: 'macchiato',
  },
  {
    image:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=400&q=80',
    title: 'Flat White',
    description:
      'An Australian-origin coffee drink similar to latte but with microfoam for a smoother texture.',
    ingredients: ['Espresso', 'Steamed milk'],
    id: 'flatwhite',
  },
  {
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    title: 'Cortado',
    description:
      'A Spanish coffee with a balanced blend of espresso and warm milk.',
    ingredients: ['Espresso', 'Warm milk'],
    id: 'cortado',
  },
  {
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    title: 'Irish Coffee',
    description:
      'A classic cocktail-style coffee with whiskey, coffee, sugar, and cream.',
    ingredients: ['Hot coffee', 'Irish whiskey', 'Sugar', 'Cream'],
    id: 'irishcoffee',
  },
  {
    image:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Cold Brew',
    description:
      'Coffee brewed using cold water over an extended time, resulting in a smooth, less acidic drink.',
    ingredients: ['Coarse ground coffee', 'Cold water'],
    id: 'coldbrew',
  },
];

// TypeScript type for CoffeeDrink
type CoffeeDrink = {
  name: string;
  origin: string;
  description: string;
  main_ingredients: string[];
  serving_style: string;
  intensity: number;
  taste: string;
  strength: string;
  how_to_make: string[];
  image_suggestion: string;
};

export const famous10Coffees: CoffeeDrink[] = [
  {
    name: 'Espresso',
    origin: 'Italy',
    description:
      'A concentrated coffee shot brewed by forcing hot water through finely-ground coffee.',
    main_ingredients: ['Finely ground coffee', 'Water'],
    serving_style: 'Small demitasse cup (30–45ml), served straight.',
    intensity: 9,
    taste: 'Strong, bold, rich, slightly bitter with some acidity.',
    strength: 'Very strong',
    how_to_make: [
      'Grind coffee beans finely.',
      'Tamp 7–9g into portafilter.',
      'Brew under 9 bars of pressure for 25–30 seconds.',
      'Serve in a preheated demitasse cup.',
    ],
    image_suggestion: 'Search stock images: Espresso in small cup with crema.',
  },
  {
    name: 'Cappuccino',
    origin: 'Italy',
    description: 'Equal parts espresso, steamed milk, and milk foam.',
    main_ingredients: ['Espresso', 'Steamed milk', 'Milk foam'],
    serving_style: 'Small cup (150–180ml), foamy top.',
    intensity: 7,
    taste: 'Creamy, balanced, sweet with a toasty note.',
    strength: 'Medium-strong',
    how_to_make: [
      'Pull one shot of espresso.',
      'Steam and froth milk.',
      'Pour espresso into cup, add steamed milk, top with thick foam.',
    ],
    image_suggestion:
      'Cappuccino with frothy top and dusting of chocolate/cinnamon.',
  },
  {
    name: 'Latte (Caffè Latte)',
    origin: 'Italy',
    description:
      'Espresso with much more steamed milk, topped with a little foam.',
    main_ingredients: ['Espresso', 'Steamed milk', 'Milk foam'],
    serving_style: 'Tall cup (240–350ml).',
    intensity: 5,
    taste: 'Smooth, creamy, mild, subtly sweet.',
    strength: 'Mild',
    how_to_make: [
      'Brew one shot of espresso.',
      'Steam large amount of milk.',
      'Pour milk over espresso, finish with a thin layer foam.',
    ],
    image_suggestion: 'Artistic latte art on foamy surface, tall cup.',
  },
  {
    name: 'Americano',
    origin: 'USA/Italy',
    description: 'Espresso diluted with hot water.',
    main_ingredients: ['Espresso', 'Hot water'],
    serving_style: 'Large cup (150–240ml), served black.',
    intensity: 5,
    taste: 'Smooth, less bitter than espresso, rich aroma.',
    strength: 'Medium',
    how_to_make: [
      'Pull espresso shot.',
      'Add 2–3x hot water by volume.',
      'Serve immediately.',
    ],
    image_suggestion: 'Black coffee in large cup, thin layer of crema.',
  },
  {
    name: 'Mocha (Caffè Mocha)',
    origin: 'Yemen/Italy',
    description:
      'Espresso, steamed milk, and chocolate syrup, topped with whipped cream.',
    main_ingredients: [
      'Espresso',
      'Steamed milk',
      'Chocolate',
      'Whipped cream',
    ],
    serving_style: 'Tall glass, sometimes chocolate garnish.',
    intensity: 6,
    taste: 'Sweet, chocolaty, creamy, with coffee undertones.',
    strength: 'Mild-medium',
    how_to_make: [
      'Add chocolate syrup to glass.',
      'Pull espresso shot over syrup.',
      'Steam milk, pour into glass.',
      'Top with whipped cream and chocolate shavings.',
    ],
    image_suggestion: 'Mocha with whipped cream and drizzle, tall glass.',
  },
  {
    name: 'Black Coffee',
    origin: 'Global',
    description:
      'Simply brewed coffee using ground beans and water, served without milk or sugar.',
    main_ingredients: ['Coffee', 'Water'],
    serving_style: 'Mug or cup.',
    intensity: 4,
    taste:
      'Pure coffee, nuanced, can be bitter, acidic or fruity depending on beans.',
    strength: 'Varies (usually medium)',
    how_to_make: [
      'Brew ground coffee with hot water (drip, pour-over, or press).',
      'Serve hot in mug.',
    ],
    image_suggestion: 'Steaming black coffee in plain mug.',
  },
  {
    name: 'Macchiato',
    origin: 'Italy',
    description: 'Espresso with a small amount of milk or foam.',
    main_ingredients: ['Espresso', 'Milk or foam'],
    serving_style: 'Small cup.',
    intensity: 8,
    taste: 'Strong, bold, hint of creaminess.',
    strength: 'Strong',
    how_to_make: [
      'Prepare espresso shot.',
      'Add a dollop of milk or foam on top.',
    ],
    image_suggestion: 'Macchiato in small glass, distinct espresso layer.',
  },
  {
    name: 'Flat White',
    origin: 'Australia/New Zealand',
    description: 'Like a latte, but with microfoam; more espresso flavor.',
    main_ingredients: ['Espresso', 'Steamed milk (microfoam)'],
    serving_style: 'Small cup (150–160ml).',
    intensity: 7,
    taste: 'Creamy, velvety, espresso-forward, silky texture.',
    strength: 'Medium-strong',
    how_to_make: [
      'Pull double espresso shot.',
      'Steam milk to microfoam texture.',
      'Pour milk over espresso, little or no foam layer.',
    ],
    image_suggestion: 'Small cup, glossy surface with latte art.',
  },
  {
    name: 'Café au Lait',
    origin: 'France',
    description: 'Equal parts brewed coffee and steamed milk.',
    main_ingredients: ['Coffee', 'Steamed milk'],
    serving_style: 'Large bowl or mug.',
    intensity: 5,
    taste: 'Milder, smooth, creamy, coffee-forward.',
    strength: 'Mild-medium',
    how_to_make: [
      'Brew strong drip coffee.',
      'Steam milk.',
      'Combine equal parts coffee and milk.',
    ],
    image_suggestion: 'Cafe au lait in large bowl, light froth.',
  },
  {
    name: 'Turkish Coffee',
    origin: 'Turkey',
    description:
      'Finely-ground coffee, simmered with water and sugar (optional), thick and strong.',
    main_ingredients: [
      'Very finely ground coffee',
      'Water',
      'Sugar (optional)',
    ],
    serving_style: 'Small cup, with grounds settled at bottom.',
    intensity: 10,
    taste: 'Extremely strong, thick, rich, sludgy, cardamom-spiced (optional).',
    strength: 'Very strong',
    how_to_make: [
      'Mix coffee, water, and sugar (optional) in small pot (cezve).',
      'Heat slowly, let foam rise but not boil.',
      'Pour including some foam; let settle.',
    ],
    image_suggestion:
      'Ornate small cup, dark thick coffee, sometimes with Turkish delights.',
  },
  {
    name: 'Irish Coffee',
    origin: 'Ireland',
    description: 'Hot coffee, Irish whiskey, sugar, topped with cream.',
    main_ingredients: ['Coffee', 'Irish whiskey', 'Sugar', 'Cream'],
    serving_style: 'Handled glass, cream floats on top.',
    intensity: 6,
    taste: 'Warming, sweet, boozy, creamy, robust.',
    strength: 'Medium',
    how_to_make: [
      'Brew hot black coffee.',
      'Mix with sugar and whiskey.',
      'Top gently with layer of cream so cream floats.',
    ],
    image_suggestion: 'Clear handled glass, dark base, thick cream layer.',
  },
  {
    name: 'Affogato',
    origin: 'Italy',
    description: "Vanilla gelato or ice cream 'drowned' in hot espresso.",
    main_ingredients: ['Espresso', 'Vanilla ice cream or gelato'],
    serving_style: 'Glass bowl or cup.',
    intensity: 7,
    taste: 'Sweet, creamy, bittersweet coffee finish.',
    strength: 'Medium',
    how_to_make: [
      'Place scoop of vanilla ice cream in dish.',
      'Pour hot espresso over top.',
      'Serve immediately.',
    ],
    image_suggestion: 'Gelato in bowl with espresso being poured over.',
  },
  {
    name: 'Cortado',
    origin: 'Spain',
    description: 'Espresso mixed with equal amount of steamed milk.',
    main_ingredients: ['Espresso', 'Steamed milk'],
    serving_style: 'Small glass (60–120ml).',
    intensity: 7,
    taste: 'Smooth, coffee-forward, less acidic.',
    strength: 'Medium-strong',
    how_to_make: [
      'Pull shot of espresso.',
      'Steam small amount of milk.',
      'Pour milk over espresso, no foam.',
    ],
    image_suggestion: 'Transparent glass, equal layers espresso and milk.',
  },
  {
    name: 'Vietnamese Egg Coffee (Cà Phê Trứng)',
    origin: 'Vietnam',
    description:
      'Egg yolk whipped with sugar and sweetened condensed milk, poured over robust coffee.',
    main_ingredients: [
      'Egg yolk',
      'Sweetened condensed milk',
      'Sugar',
      'Coffee',
    ],
    serving_style: 'Glass cup or mug, sweet foamy top.',
    intensity: 8,
    taste: 'Sweet, rich, custard-like, creamy with strong coffee notes.',
    strength: 'Medium-strong',
    how_to_make: [
      'Whip egg yolk with sugar, condensed milk until frothy.',
      'Brew strong Vietnamese coffee (phin filter).',
      'Pour egg mix over coffee, serve immediately.',
    ],
    image_suggestion:
      'Layered drink in glass mug, creamy yellow foam, dark base.',
  },
  {
    name: 'Cold Brew',
    origin: 'Modern USA/Japan',
    description: 'Coffee grounds steeped in cold water for 12–24 hours.',
    main_ingredients: ['Coarse ground coffee', 'Cold water'],
    serving_style: 'Tall glass, often over ice.',
    intensity: 6,
    taste: 'Smooth, mellow, mild acidity, chocolatey, less bitter.',
    strength: 'Strong (high caffeine), mild flavor',
    how_to_make: [
      'Mix coarse coffee and cold water in jar (1:8 ratio).',
      'Steep 12–24 hours in fridge.',
      'Strain and serve over ice.',
    ],
    image_suggestion: 'Tall glass, ice cubes, dark amber coffee.',
  },
  {
    name: 'Frappé',
    origin: 'Greece',
    description: 'Iced instant coffee shaken for frothy cold drink.',
    main_ingredients: [
      'Instant coffee',
      'Water',
      'Sugar',
      'Ice',
      'Milk (optional)',
    ],
    serving_style: 'Tall glass, lots of foam.',
    intensity: 4,
    taste: 'Sweet, refreshing, foamy, slightly bitter.',
    strength: 'Mild-medium',
    how_to_make: [
      'Add instant coffee, water, and sugar to shaker.',
      'Shake or blend vigorously.',
      'Pour over ice, top with milk if desired.',
    ],
    image_suggestion: 'Tall glass, foamy top, straw, visible ice.',
  },
];
