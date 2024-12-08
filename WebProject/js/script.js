﻿let icons = [];

function find(event) {
    event.preventDefault();
    let text = document.querySelector("[type=search]");
    if (document.getElementById(text.value.toLowerCase()) !== null) {
        window.location.href = window.location.pathname + "#" + text.value.toLowerCase();
    }
}

window.addEventListener("DOMContentLoaded", function () {
    list = document.getElementById("datalistOptions");
    const card = [
        new Card(
            "Дафния",
            "Дафния является естественным природным кормом, необходимым для всех видов рыб. Особенно он незаменим при вскармливании мальков. Стимулирует нерест многих рыб. Является полноценным по биохимическому составу кормом с высоким содержанием белков, минеральных веществ и витаминов. Так же подходит для кормления маленьких лягушат, черепах и подкормки декоративных птиц. В 100 г сухого корма содержится: Белков - 39 г; Жиров - 7г; Углеводы - 20г. Витамины: А,В6,С,РР.\t Энергетическая ценность: 270 кКал. Способ кормления: кормить 1-2 раза в день небольшими порциями. Чтобы корм легче переваривался в желудках рыб и быстрее намокал, рекомендуется крупные частицы корма перед кормлением тщательно растереть. Порцию должны съесть в течении 10-15 минут.",
            "source/card/1.jpeg",
            [10, 20, 180, 450],
            [15, 26, 240, 585],
            ["fish", "turtle", "bird"],
            document.querySelector(".card")),
        new Card(
            "Гаммарус",
            "Гаммарус считается одним из лучших натуральных кормов для аквариумных рыб, благодаря своей высокой пищевой ценности и большому содержанию каротина. Регулярное кормление гаммарусом способствует укреплению здоровья рыб, очистке пищеварительной системы и сохранению их природной окраски. Рекомендован для ярко окрашенных рыб, водяных и сухопутных черепах, декоративных птиц. Может существенно дополнить пищевой рацион, лягушек и мелких грызунов. Можно использовать для кормления моллюсков, раков и насекомых. В 100 г сухого корма содержится: Белков - 56,2 г; Жиров - 5,8г; Углеводы - 3,2г. Витамины: А, каротин. Энергетическая ценность: 270 кКал. Способ кормления: кормить 1-2 раза в день небольшими порциями. Чтобы корм легче переваривался в желудках рыб и быстрее намокал, рекомендуется крупные частицы корма перед кормлением тщательно растереть. Порцию должны съесть в течении 10-15 минут.",
            "source/card/2.jpeg",
            [20, 250, 500],
            [26, 330, 660],
            ["fish", "turtle"],
            null),
        new Card(
            "Креветка",
            "Креветка - это один из основных природных кормов для крупных и средних видов аквариумных рыб, черепах, различных рептилий и птиц. Рекомендуется для ежедневного кормления. В мясе креветок содержится много белка и микроэлементов необходимых для организма – кальций, фосфор, йод. В 100 г сухого корма содержится: Белков – 18,9 г; Жиров – 2,2 г; Микроэлементы – 70 г. Витамины: A,Е,B1,В2,В9, С, PP. Энергетическая ценность: 95 кКал. Способ кормления: кормить 2-3 раза в день небольшими порциями. Для средних и мелких рыб креветку желательно измельчить. Порцию должны съесть в течение 10-15 минут.",
            "source/card/3.jpeg",
            [20, 400, 800],
            [38, 760, 1520],
            ["fish", "turtle", "spider", "bird"],
            null),
        new Card(
            "Лакомка",
            "Лакомка натуральный корм, состоящий из дафнии и мотыля 50/50. Это прекрасный, эффективный корм, обеспечивающий воспроизводство для всех без исключения рыб. Он подходит как взрослым рыбам, так и подросшим малькам. По своим питательным свойствам, по содержанию витаминов и полезных веществ дафния и мотыль занимают первое место среди всех кормов. В 100 г сухого корма содержится: Белков – 51 г; Жиров – 5 г; Углеводы – 29,7 г. Витамины: А,В1,В2, B6, С, PP, каротин. Энергетическая ценность: 360 кКал. Способ кормления: кормить 1-2 раза в день небольшими порциями. Чтобы корм легче переваривался в желудках рыб и быстрее намокал, рекомендуется крупные частицы корма перед кормлением тщательно растереть. Порцию должны съесть в течение 10-15 минут.",
            "source/card/4.jpeg",
            [20],
            [32],
            ["fish"],
            null),
        new Card(
            "Артемия",
            "Артемия декапсулированная – готовый корм из декапсулированных и высушенных яиц рачка Artemia. Является одним из лучших кормов для поднятия мальков и превосходный источник белка для роста и развития всех аквариумных рыб. Декапсулированные цисты обладают более высокой энергетической ценностью по сравнению с живыми науплиями артемии, поэтому для насыщения рыбок необходимо меньшее их количество. Корм характеризуется высоким содержанием белка, жира и каротиноидов. Содержит все незаменимые аминокислоты и витамины. В 100 г сухого корма содержится: Белков – 63 г; Жиров – 23 г; Сырая зола – 10 г; Витамины: каротиноиды; В1; В3; В5; В6; В7; В12, макро и микроэлементы. Энергетическая ценность: 474 кКал. Способ кормления: кормить 2-3 раза в день небольшими порциями. Порцию должны съесть в течение 10-15 минут.",
            "source/card/5.jpeg",
            [20],
            [80],
            ["fish"],
            null),
        new Card(
            "Гурман",
            "Гурман – это натуральный сухой корм, состоящий из ряски и дафнии 50/50. дафния в сочетании с ряской – это отличный корм для растительноядных, пресноводных рыб. Этот корм должен стать постоянной составной частью пищи этих видов рыб, особенно в конце голодного дня. Он богат витаминами Е и РР, а так же клетчаткой, которая способствует улучшению пищеварения. Очень хорошо едят ряску золотые рыбки, скалярии, телескопы, оранды, меченосцы, моллинезии, гуппи, некоторые хемиграммусы, тиляпии и т.д. В 100 г сухого корма содержится: Белков – 39 г; жиров – 10 г; углеводов – 24 г; клетчатка – 27 г. Способ кормления: кормить 1-2 раза в день небольшими порциями. Чтобы корм легче переваривался в желудках рыб и быстрее намокал, рекомендуется крупные частицы корма перед кормлением тщательно растереть. Порцию должны съесть в течение 10-15 минут.",
            "source/card/6.jpeg",
            [20],
            [24],
            ["fish"],
            null),
        new Card(
            "Оптима",
            "Оптима – это натуральный сухой корм, состоящий из дафнии и гаммаруса 50/50. Подходит для всех видов аквариумных рыб. Этот корм богат белками, каротином, необходимыми минералами и питательными веществами, которые способствуют укреплению здоровья и сохранению естественной окраски рыб. Способ кормления: кормить 1-2 раза в день небольшими порциями. Чтобы корм легче переваривался в желудках рыб и быстрее намокал, рекомендуется крупные частицы корма перед кормлением тщательно растереть. Порцию должны съесть в течение 10-15 минут.",
            "source/card/7.jpeg",
            [20],
            [22],
            ["fish"],
            null),
        new Card(
            "Мотыль",
            "Мотыль – это самый излюбленный корм для всех аквариумных рыб, не только взрослых, но и для подросших мальков. Так как в нем есть все необходимые для жизнедеятельности организма аминокислоты, большое количество белков, жиров и углеводов. Рыбы, получающие в качестве основного корма мотыля, развиваются правильно, достигают максимальной величины и дают при размножении полноценное потомство. В 100 г сухого корма содержится: Белков – 62,5 г; Жиров – 2,9 г; Углеводы – 29,7 г. Витамины: А,В1,В2, каротин. Энергетическая ценность: 450 кКал. Способ кормления: кормить 1-2 раза в день небольшими порциями. Чтобы корм легче переваривался в желудках рыб и быстрее намокал, рекомендуется крупные частицы корма перед кормлением тщательно растереть и замочить в горячей воде на 2 минуты. Порцию должны съесть в течение 10-15 минут.",
            "source/card/8.jpeg",
            [20],
            [38],
            ["fish"],
            null),
        new Card(
            "Старт",
            "Старт – это натуральный корм, состоящий из двух природных кормов (дафния и опарыш) необходимых для поднятия молоди, а так же прекрасная пищевая добавка к рациону любых декоративных рыб. Белковый состав данного корма сбалансирован по содержанию аминокислот, при этом содержание белков составляет не менее 50%, а их усвояемость практически 100%. Старт также содержит оптимальное количество клетчатки, хитина и железа, которые нормализуют работу желудочно-кишечного тракта. Корм содержит достаточное количество пигментов - каротиноидов, необходимых для яркой окраски рыб. Антибактериальные свойства опарыша позволяют предотвращать различные заболевания рыб и поддерживают иммунитет. Регулярное использование Старта способствует быстрому росту, здоровью и активности ваших воспитанников. В 100 г сухого корма содержится: Белков – 49 г; Жиров – 9,3 г; Клетчатка- 8г. Витамины: A, B6, С, PP. Энергетическая ценность: 270 кКал. Способ кормления: кормить 1-2 раза в день не большими порциями. Чтобы корм легче переваривался в желудках рыб",
            "source/card/9.jpeg",
            [20],
            [22],
            ["fish"],
            null),
        new Card(
            "Анчоус",
            "Это высушенный натуральный продукт для рептилий, крупных и средних промышленных и декоративных рыб. Улучшает иммунитет и окраску. Ускоряет рост. Не засоряет воду. Долго плавает на поверхности воды. Рекомендации по кормлению: кормить по мере необходимости. Пищевая ценность: сырой протеин 62%, влага 6%, жир 16%, сырая зола 8%.",
            "source/card/10.jpeg",
            [20, 400, 800],
            [40, 800, 1600],
            ["fish", "turtle"],
            null),
        new Card(
            "Чёрная львинька",
            "Это высококачественный, натуральный корм для аквариумных и прудовых рыб, грызунов, птиц, рептилий, амфибий с высоким содержанием кальция, белка, жира, углеводов и биологических активных веществ. Повышает эффективность рациона кормления, скорость роста. Содержит лауриновую кислоту, что способствует укреплению иммунитета и антибиотическому эффекту. Пищевая ценность: сырой протеин 40%, жир 32%, зола 10%.",
            "source/card/11.jpeg",
            [20, 250, 500],
            [20, 250, 500],
            ["fish", "turtle", "bird"],
            null),
        new Card(
            "Хлопья для тропических рыб",
            "Комплексный корм в хлопьях для всех видов пресноводных тропических рыб. Корм приготовлен из смесей высокого качества, обеспечивающих здоровое питание для ваших рыб. Рекомендации по кормлению: кормить 2-3 раза в день таким количеством корма, которое рыбы могут быстро съесть. Ингредиенты: злаковые, рыба и рыбные субпродукты, дрожжи, ракообразные, водоросли, витаминный премикс, красители, астаксантин. Пищевая ценность: сырой протеин 45%, влага 6%, жир 5,5%, сырая зола 10%, витамин A – 20 000 МЕ/кг, витамин D3 – 1 000 МЕ/кг, витамин C - 300 МЕ/кг, витамин E - 100 МЕ/кг.",
            "source/card/12.jpeg",
            [10, 250, 500],
            [20, 500, 1000],
            ["fish"],
            null),
        new Card(
            "Хлопья для золотых рыб",
            "Комплексный корм в хлопьях для ценных пород золотых рыб, а также для простых караcевых. Обеспечивает сбалансированное питание, т.к. содержит минеральные соли, белки, липиды, углеводы, необходимые для роста и развития этих видов рыб. Рекомендации по кормлению: кормить 2-3 раза в день таким количеством корма, которое рыбы могут съесть. Ингредиенты: злаковые, рыба и рыбные субпродукты, дрожжи, ракообразные, водоросли, витаминный премикс, красители, астаксантин. Пищевая ценность: сырой протеин 38%, влага 6%, жир 4,5%, сырая зола 10%, витамин A – 20 000 МЕ/кг, витамин D3 – 1 000 МЕ/кг, витамин C - 300 МЕ/кг, витамин E - 100 МЕ/кг.",
            "source/card/13.jpeg",
            [10, 250, 500],
            [20, 500, 1000],
            ["fish"],
            null),
        new Card(
            "Рацион",
            `Рацион – это натуральный, незаменимый корм для мальков, состоящий из
природных кормов (дафния, мотыль, коретра, гладыш ) и содержит все
нужные питательные вещества и витамины необходимые для поднятия
молоди, а так же прекрасный корм к рациону любых декоративных рыб.
Белковый состав данного корма сбалансирован и содержит все
незаменимые аминокислоты. Корм также содержит оптимальное
количество клетчатки, хитина и железа, которые нормализуют работу
желудочно-кишечного тракта. Корм содержит достаточное количество
пигментов - каротиноидов, необходимых для яркой окраски рыб.
Поддерживает иммунитет рыб. Регулярное использование корма
способствует быстрому росту, здоровью и активности ваших рыб.
В 100 г сухого корма содержится: Белков –60 г; Жиров – 20 г;
Углеводов20г. Витамины: A, B1,В2, В12, PP. Клетчатка Энергетическая
ценность: 270 кКал.
Способ кормления: кормить 1-2 раза в день не большими порциями.
Порцию должны съесть в течение 10-15 минут.`,
            "source/card/14.jpeg",
            [20],
            [20],
            ["fish"],
            null),
        new Card(
            "Гладыш",
            `ГЛАДЫШ - это род крупных пресноводных клопов семейства Гладышевых.
Является натуральным, природным кормом для крупных рыб и декоративных
птиц. Этот корм долго плавает на поверхности воды и не загрязняет
ее. Сухой гладыш содержит много белка и питательных веществ,
необходимых для ежедневного рациона ваших домашних питомцев.
Рекомендован для крупных рыб, птиц.
Способ кормления: кормить 1-2 раза в день небольшими порциями. Порцию
должны съесть в течение 10-15 минут.
корм легче переваривался в желудках рыб и быстрее намокал, рекомендуется
крупные частицы корма перед кормлением тщательно растереть. Порцию
должны съесть в течении 10-15 минут.`,
            "source/card/15.jpeg",
            [20],
            [15],
            ["fish", "bird"],
            null),
        new Card(
            "Гранулы",
            `Полнорационный плавающий корм для декоративной
прудовой рыбы. Идеален для ежедневного кормления
благодаря легко усвояемым ингредиентам.
Сбалансированный рацион поддерживает рыбу в
прекрасной форме и способствует быстрому росту.
Подходит для всех периодов сезона кормления.
Кормить 2-4 раза в день в зависимости от размера
рыбы и температуры воды. Норма кормления не
больше чем рыба съедает за 5 минут. Состав:
пшеница, кукуруза, ядро подсолнечника, мука
рыбная, мука кровяная, жир рыбий, белок соевый,
глютен пшеничный, глютен кукурузный, лизин,
метионин, треонин, пробиотик, лецитин, премикс.
Показатели качества: ЭП 18,41 МДж, Сырой протеин
39,2%, Сырой жир 9,03%, Сырая клетчатка 4,5%,
Лизин 2,37%, Метионин 1,04%, Треонин 1,58%,
Витамин А - 10 тыс. МЕ/кг, Витамин Е - мг/кг,
Витамин - С мг/кг.`,
            "source/card/16.jpeg",
            [1000, 4000],
            [500, 2000],
            ["fish"],
            null),
        new Card(
            "Ассорти",
            `Полнорационный плавающий корм для декоративной
прудовой рыбы, состоящий из гранул и гаммаруса
обладает высокой пищевой ценностью, оптимальным
балансом жирных кислот, поддерживает рыбу в
прекрасной форме. Богат каротином и витаминами.
Кормить 2-4 раза в день в зависимости от размера
рыбы и температуры воды. Норма кормления не
больше чем рыба съедает за 5 минут. Состав:
пшеница, кукуруза, ядро подсолнечника, мука
рыбная, мука кровяная, жир рыбий, белок соевый,
глютен пшеничный, глютен кукурузный, лизин,
метионин, треонин, пробиотик, лецитин, премикс.
Показатели качества: ЭП 18,41 МДж, Сырой протеин
56,2%, Сырой жир 9,03%, Сырая клетчатка 4,5%,
Лизин 2,37%, Метионин 1,04%, Треонин 1,58%,
Витамин А - 10 тыс. МЕ/кг, Витамин Е - мг/кг,
Витамин - С мг/кг, Каротин.`,
            "source/card/17.jpeg",
            [1000, 4000],
            [620, 2480],
            ["fish"],
            null),
        new Card(
            "Палочки",
            "Корм для рыб среднего и большого размера, таких как: золотые рыбы, карпы кои, уклейка, линь. Рекомендации по\
кормлению: кормить 2-3 раза в день таким количеством корма, которое рыбы могут быстро съесть; при температуре\
ниже 10°С не кормить.\
Ингредиенты: злаковые, соя, рыба и рыбные субпродукты, ракообразные, овощи и субпродукты растительного\
происхождения, спирулина 0,20%, кантаксантин 10 мг/кг, красители.\
Пищевая ценность: сырой белок 23,00%, влажность 4,80, сырая зола 5,70%, сырая клетчатка 3,25%; жир-сырец 2,85%.\
Пищевые добавки: Витамин А 23.300 МЕ/кг, Витамин D3 1.600 МЕ/кг, Витамин Е 90 мг/кг, Витамин С 60 мг/кг,\
кантаксантин 10 мг/кг, Омега-6 42,24%, Омега-3 5,69%.",
            "source/card/18.jpeg",
            [500, 1000, 2000],
            [500, 1000, 2000],
            ["fish"],
            null),
        new Card(
            "Класс Карпа",
            `Полнорационный плавающий корм для декоративной прудовой рыбы.
Идеален для ежедневного кормления благодаря легко усвояемым
ингредиентам. Сбалансированный рацион поддерживает рыбу в
прекрасной форме и способствует быстрому росту. Подходит для всех
периодов сезона кормления. Кормить 2-4 раза в день в зависимости от
размера рыбы и температуры воды. Норма кормления не больше чем рыба
съедает за 5 минут. Состав: пшеница, кукуруза, ядро подсолнечника, мука
рыбная, мука кровяная, жир рыбий, белок соевый, глютен пшеничный,
глютен кукурузный, лизин, метионин, треонин, пробиотик, лецитин,
премикс.
Показатели качества: ЭП 18,41 МДж, Сырой протеин 39,2%, Сырой жир
9,03%, Сырая клетчатка 4,5%, Лизин 2,37%, Метионин 1,04%, Треонин
1,58%, Витамин А - 10 тыс. МЕ/кг, Витамин Е - мг/кг, Витамин - С мг/кг.`,
            "source/card/19.jpeg",
            [40],
            [24],
            ["fish"],
            null)
    ];

    document.querySelectorAll(".interact").forEach(function (i) {
        i.contentWindow.addEventListener("DOMContentLoaded", function () {
            let svg = this.document.querySelector("path");
            icons.push(i);
            this.document.addEventListener("click", function () {
                let path = this.querySelector("path");
                let list = path.classList;
                list.toggle("selected");
                if (list.value === "selected") {
                    path.attributes["fill"].value = "#44AEE8";
                } else {
                    path.attributes["fill"].value = "black";
                }
                icons.forEach(function (j) {
                    if (j.contentDocument.querySelector("path").classList.value === "selected") {
                        console.log(j.classList[1]);
                        card.forEach(function(k){
                            if (k.animalsArr.find(m => m === j.classList[1])) {
                                k.element.classList.remove("d-none");
                            } else {
                                k.element.classList.add("d-none"); 
                            }
                        });
                    }
                });
            });
        });
    });
    document.querySelector(".find").addEventListener("submit", find);
});