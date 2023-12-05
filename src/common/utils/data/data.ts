import { IngredientsType, receiptsType } from '../types/type'
import { v4 } from 'uuid'

export const ingredients: IngredientsType = {
  fruits: [
    { ingredient: 'абрикос', measurement: 'кг' },
    { ingredient: 'ананас', measurement: 'кг' },
    { ingredient: 'апельсин', measurement: 'кг' },
    { ingredient: 'банан', measurement: 'кг' },
    { ingredient: 'виноград киш-миш', measurement: 'кг' },
    { ingredient: 'вишня', measurement: 'кг' },
    { ingredient: 'груша', measurement: 'кг' },
    { ingredient: 'клубника', measurement: 'кг' },
    { ingredient: 'киви', measurement: 'кг' },
    { ingredient: 'лайм', measurement: 'кг' },
    { ingredient: 'лимон', measurement: 'кг' },
    { ingredient: 'малина', measurement: 'кг' },
    { ingredient: 'мандарин', measurement: 'кг' },
    { ingredient: 'манго', measurement: 'кг' },
    { ingredient: 'нектарин', measurement: 'кг' },
    { ingredient: 'персик', measurement: 'кг' },
    { ingredient: 'яблоко', measurement: 'кг' },
    { ingredient: 'черника', measurement: 'кг' },
    { ingredient: 'хурма', measurement: 'кг' },
    { ingredient: 'ключква', measurement: 'кг' },
    { ingredient: 'облипиха', measurement: 'кг' }
  ],
  grocery: [
    { ingredient: 'булгур', measurement: 'кг' },
    { ingredient: 'горох сухой', measurement: 'кг' },
    { ingredient: 'гречневая крупа', measurement: 'кг' },
    { ingredient: 'каркадэ', measurement: 'гр' },
    { ingredient: 'крахмал картофельный', measurement: 'кг' },
    { ingredient: 'крахмал кукурузный', measurement: 'кг' },
    { ingredient: 'лимонная кислота', measurement: 'гр' },
    { ingredient: 'льняная мука', measurement: 'кг' },
    { ingredient: 'манная крупа', measurement: 'кг' },
    { ingredient: 'масло подсолнечное', measurement: 'кг' },
    { ingredient: 'мука 1й сорт', measurement: 'кг' },
    { ingredient: 'мука высший сорт', measurement: 'кг' },
    { ingredient: 'мука грубого помола', measurement: 'кг' },
    { ingredient: 'нут', measurement: 'кг' },
    { ingredient: 'нутовая мука', measurement: 'кг' },
    { ingredient: 'овсяная крупа', measurement: 'кг' },
    { ingredient: 'перловка', measurement: 'кг' },
    { ingredient: 'пшено', measurement: 'кг' },
    { ingredient: 'рис басмати', measurement: 'кг' },
    { ingredient: 'рисовые хлопья', measurement: 'кг' },
    { ingredient: 'розовая вода', measurement: 'л' },
    { ingredient: 'сахар', measurement: 'кг' },
    { ingredient: 'сода', measurement: 'гр' },
    { ingredient: 'соль', measurement: 'гр' },
    { ingredient: 'томатная паста', measurement: 'кг' },
    { ingredient: 'чечевица зеленая', measurement: 'кг' },
    { ingredient: 'чечевица красная', measurement: 'кг' },
    { ingredient: 'вода', measurement: 'л' }
  ],
  vegetables: [
    { ingredient: 'авокадо', measurement: 'кг' },
    { ingredient: 'айсберг', measurement: 'кг' },
    { ingredient: 'баклажан', measurement: 'кг' },
    { ingredient: 'базилик', measurement: 'кг' },
    { ingredient: 'батат', measurement: 'кг' },
    { ingredient: 'белокачанная капуста', measurement: 'кг' },
    { ingredient: 'брокколи капуста', measurement: 'кг' },
    { ingredient: 'горох', measurement: 'кг' },
    { ingredient: 'горох в банке', measurement: 'банка 400гр' },
    { ingredient: 'кабачок', measurement: 'кг' },
    { ingredient: 'картошка', measurement: 'кг' },
    { ingredient: 'кинза свежая', measurement: 'кг' },
    { ingredient: 'краснокачанная капуста', measurement: 'кг' },
    { ingredient: 'кукуруза свежая', measurement: 'кг' },
    { ingredient: 'кукуруза в банке', measurement: 'банка 300гр' },
    { ingredient: 'маслины', measurement: 'банка 300гр' },
    { ingredient: 'морковка', measurement: 'кг' },
    { ingredient: 'мята свежая', measurement: 'кг' },
    { ingredient: 'огурцы', measurement: 'кг' },
    { ingredient: 'огурцы маринованные', measurement: 'кг' },
    { ingredient: 'оливки', measurement: 'банка 300гр' },
    { ingredient: 'пекинская капуста', measurement: 'кг' },
    { ingredient: 'перец', measurement: 'кг' },
    { ingredient: 'петрушка свежая', measurement: 'кг' },
    { ingredient: 'руккола', measurement: 'кг' },
    { ingredient: 'свекла', measurement: 'кг' },
    { ingredient: 'шпинат свежий', measurement: 'кг' },
    { ingredient: 'шпинат замороженный', measurement: 'кг' },
    { ingredient: 'тархун свежий', measurement: 'кг' },
    { ingredient: 'томаты', measurement: 'кг' },
    { ingredient: 'тыква', measurement: 'кг' },
    { ingredient: 'укроп свежий', measurement: 'кг' },
    { ingredient: 'цветная капуста', measurement: 'кг' },
    { ingredient: 'цуккини', measurement: 'кг' },
    { ingredient: 'имбирь', measurement: 'кг' }
  ],
  juices: [
    { ingredient: 'сок апельсиновый', measurement: 'л' },
    { ingredient: 'сок гранатовый', measurement: 'л' },
    { ingredient: 'сок лимонный', measurement: 'л' },
    { ingredient: 'сок манговый', measurement: 'л' },
    { ingredient: 'сок вишневый', measurement: 'л' },
    { ingredient: 'сок виноградный (красный)', measurement: 'л' }
  ],
  milks: [
    { ingredient: 'адыгейский сыр', measurement: 'кг' },
    { ingredient: 'кефир', measurement: 'л' },
    { ingredient: 'майонез постный', measurement: 'кг' },
    { ingredient: 'молоко', measurement: 'л' },
    { ingredient: 'растительные сливки 26%', measurement: 'л' },
    { ingredient: 'ряженка 3,6%', measurement: 'л' },
    { ingredient: 'сгущенка вареная, банка', measurement: 'б. 380 гр' },
    { ingredient: 'сгущенка, банка', measurement: 'б. 380 гр' },
    { ingredient: 'сливки 10%', measurement: 'л' },
    { ingredient: 'сливки 33%', measurement: 'л' },
    { ingredient: 'сливочное масло 82%', measurement: 'кг' },
    { ingredient: 'сметана 26%', measurement: 'л' },
    { ingredient: 'сухое молоко', measurement: 'кг' },
    { ingredient: 'сыр желтый', measurement: 'кг' },
    { ingredient: 'сыр камамбер', measurement: 'кг' },
    { ingredient: 'сыр моцарелла', measurement: 'кг' },
    { ingredient: 'сыр сулугуни', measurement: 'кг' },
    { ingredient: 'сыр чечил/джил', measurement: 'кг' },
    { ingredient: 'творог 9%', measurement: 'кг' }
  ],
  nuts: [
    { ingredient: 'арахис', measurement: 'кг' },
    { ingredient: 'грецкий орех', measurement: 'кг' },
    { ingredient: 'кешью', measurement: 'кг' },
    { ingredient: 'кунжут', measurement: 'кг' },
    { ingredient: 'кокосовая стружка', measurement: 'кг' },
    { ingredient: 'миндаль', measurement: 'кг' },
    { ingredient: 'семена льна', measurement: 'кг' },
    { ingredient: 'семена чиа', measurement: 'кг' },
    { ingredient: 'семечки подсолнечника', measurement: 'кг' },
    { ingredient: 'семечки тыквы', measurement: 'кг' },
    { ingredient: 'фундук', measurement: 'кг' }
  ],
  driedFruits: [
    { ingredient: 'инжир', measurement: 'кг' },
    { ingredient: 'изюм', measurement: 'кг' },
    { ingredient: 'курага', measurement: 'кг' },
    { ingredient: 'финики', measurement: 'кг' },
    { ingredient: 'цукаты', measurement: 'кг' }
  ],
  spices: [
    { ingredient: 'анис', measurement: 'гр' },
    { ingredient: 'асафетида', measurement: 'гр' },
    { ingredient: 'базилик сухой', measurement: 'гр' },
    { ingredient: 'бадьян', measurement: 'гр' },
    { ingredient: 'ванилин', measurement: 'гр' },
    { ingredient: 'гарам масала', measurement: 'гр' },
    { ingredient: 'гуаровая камедь', measurement: 'гр' },
    { ingredient: 'горчица черная', measurement: 'гр' },
    { ingredient: 'горчичный порошок', measurement: 'гр' },
    { ingredient: 'гвоздика молотая', measurement: 'гр' },
    { ingredient: 'имбирь молотый', measurement: 'гр' },
    { ingredient: 'кардамон молотый', measurement: 'гр' },
    { ingredient: 'карри молотый', measurement: 'гр' },
    { ingredient: 'калинджи', measurement: 'гр' },
    { ingredient: 'кориандр молотый', measurement: 'гр' },
    { ingredient: 'корица молотая', measurement: 'гр' },
    { ingredient: 'кумин молотый', measurement: 'гр' },
    { ingredient: 'куркума молотая', measurement: 'гр' },
    { ingredient: 'лавровый лист', measurement: 'гр' },
    { ingredient: 'лавровый лист молотый', measurement: 'гр' },
    { ingredient: 'листья шамбалы', measurement: 'гр' },
    { ingredient: 'мускатный орех', measurement: 'гр' },
    { ingredient: 'мята', measurement: 'гр' },
    { ingredient: 'майоран', measurement: 'гр' },
    { ingredient: 'орегано', measurement: 'гр' },
    { ingredient: 'пажитник молотый', measurement: 'гр' },
    { ingredient: 'паприка копченая молотая', measurement: 'гр' },
    { ingredient: 'паприка молотая', measurement: 'гр' },
    { ingredient: 'петрушка', measurement: 'гр' },
    { ingredient: 'порошок горчицы', measurement: 'гр' },
    { ingredient: 'розмарин', measurement: 'гр' },
    { ingredient: 'шафран', measurement: 'гр' },
    { ingredient: 'шалфей', measurement: 'гр' },
    { ingredient: 'чабрец', measurement: 'гр' },
    { ingredient: 'чили сухой молотый', measurement: 'гр' },
    { ingredient: 'черный перец молотый', measurement: 'гр' },
    { ingredient: 'черная соль', measurement: 'гр' },
    { ingredient: 'хмели сунели', measurement: 'гр' },
    { ingredient: 'укроп', measurement: 'гр' },
    { ingredient: 'тмин', measurement: 'гр' }
  ]
}

export const recipes: receiptsType[] = [
  {
    title: 'рис басмати', value: 100, ingredients: [
      { ingredient: 'рис басмати', measurement: 'кг', value: 7.2 },
      { ingredient: 'сливочное масло 82%', measurement: 'кг', value: 1.8 },
      { ingredient: 'вода', measurement: 'л', value: 16.7 },
      { ingredient: 'соль', measurement: 'гр', value: 184 },
      { ingredient: 'итог', measurement: 'кг', value: 21.7 }
    ], description: 'Закипятить воду. Выложить сливочное масло в кастрюлю и растопить его. Добавить рис и обжарить до золотистых крупинок. Затем добавить соль и закипевшую воду. Размешать и довести до кипения. Поставить огонь на минимум и варить под крышкой в течение 13 минут. Затем выключить огонь и оставить под крышкой на протяжении 20 минут. Проверьте грамматику.', id: v4()
  },
  {
    title: 'сабджи из картошки и цветной капусты', value: 100, ingredients: [
      { ingredient: 'картошка', measurement: 'кг', value: 20 },
      { ingredient: 'морковка', measurement: 'кг', value: 10 },
      { ingredient: 'цветная капуста', measurement: 'кг', value: 20 },
      { ingredient: 'адыгейский сыр', measurement: 'кг', value: 5 },
      { ingredient: 'томатная паста', measurement: 'кг', value: 2 },
      { ingredient: 'сахар', measurement: 'кг', value: 1 },
      { ingredient: 'укроп', measurement: 'гр', value: 100 },
      { ingredient: 'сметана 26%', measurement: 'л', value: 2.5 },
      { ingredient: 'масло подсолнечное', measurement: 'л', value: 2 },
      { ingredient: 'асафетида', measurement: 'гр', value: 50 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 30 },
      { ingredient: 'кориандр молотый', measurement: 'гр', value: 30 },
      { ingredient: 'карри молотый', measurement: 'гр', value: 40 },
      { ingredient: 'итог', measurement: 'кг', value: 42.5 }
    ], description: 'Овощи запечь отдельно или потушить. Для приготовления масалы: разогрейте масло, обжарьте в нем специи, затем добавьте томатную пасту и сахар, обжарьте до характерного бордового состояния. Смешайте овощи, сметану, масалу, а затем добавьте асафетиду. Посолите и размешайте.', id: v4()
  },
  {
    title: 'сабджи из картошки, морковки и перца', value: 100, ingredients: [
      { ingredient: 'картошка', measurement: 'кг', value: 20 },
      { ingredient: 'морковка', measurement: 'кг', value: 20 },
      { ingredient: 'перец', measurement: 'кг', value: 10 },
      { ingredient: 'томатная паста', measurement: 'кг', value: 2 },
      { ingredient: 'сахар', measurement: 'кг', value: 1 },
      { ingredient: 'петрушка', measurement: 'гр', value: 100 },
      { ingredient: 'сметана 26%', measurement: 'л', value: 2.5 },
      { ingredient: 'масло подсолнечное', measurement: 'л', value: 2 },
      { ingredient: 'асафетида', measurement: 'гр', value: 50 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 30 },
      { ingredient: 'кориандр молотый', measurement: 'гр', value: 30 },
      { ingredient: 'карри молотый', measurement: 'гр', value: 40 },
      { ingredient: 'итог', measurement: 'кг', value: 37.5 }
    ], description: 'Овощи запечь отдельно или потушить. Для приготовления масалы: разогрейте масло, обжарьте в нем специи, затем добавьте томатную пасту и сахар, обжарьте до характерного бордового состояния. Смешайте овощи, сметану, масалу, а затем добавьте асафетиду. Посолите и размешайте.', id: v4()
  },
  {
    title: 'напиток с мятой', value: 100, ingredients: [
      { ingredient: 'вода', measurement: 'л', value: 40 },
      { ingredient: 'мята свежая', measurement: 'кг', value: 0.1 },
      { ingredient: 'сахар', measurement: 'кг', value: 1.5 },
      { ingredient: 'лимон', measurement: 'кг', value: 0.6 },
      { ingredient: 'итог', measurement: 'л', value: 40 }
    ], description: 'Закипятить воду, добавить мяту, сахар, лимонный сок. После кипения выключить газ и добавить шкурки лимона, закрыть крышкой оставить настаиваться.', id: v4()
  },
  {
    title: 'напиток с облипихой', value: 100, ingredients: [
      { ingredient: 'вода', measurement: 'л', value: 40 },
      { ingredient: 'облипиха', measurement: 'кг', value: 1.3 },
      { ingredient: 'сахар', measurement: 'кг', value: 1.8 },
      { ingredient: 'лимон', measurement: 'кг', value: 1 },
      { ingredient: 'итог', measurement: 'л', value: 40 }
    ], description: 'Закипятить воду, добавить сахар, лимонный сок. Взблендерить облипиху с частью воды, добавить. После кипения выключить газ и добавить шкурки лимона, закрыть крышкой оставить настаиваться.', id: v4()
  },
  {
    title: 'напиток с клубникой', value: 100, ingredients: [
      { ingredient: 'вода', measurement: 'л', value: 40 },
      { ingredient: 'клубника', measurement: 'кг', value: 1.5 },
      { ingredient: 'сахар', measurement: 'кг', value: 1.5 },
      { ingredient: 'лимон', measurement: 'кг', value: 0.5 },
      { ingredient: 'каркадэ', measurement: 'гр', value: 100 },
      { ingredient: 'итог', measurement: 'л', value: 40 }
    ], description: 'Закипятить воду, добавить сахар, лимонный сок, каркадэ. Взблендерить клабнику с частью воды, добавить. После кипения выключить газ и добавить шкурки лимона, закрыть крышкой оставить настаиваться.', id: v4()
  },
  {
    title: 'глинтвейн', value: 100, ingredients: [
      { ingredient: 'вода', measurement: 'л', value: 30 },
      { ingredient: 'сок виноградный (красный)', measurement: 'л', value: 10.9 },
      { ingredient: 'апельсин', measurement: 'кг', value: 0.5 },
      { ingredient: 'сахар', measurement: 'кг', value: 0.8 },
      { ingredient: 'лимон', measurement: 'кг', value: 0.1 },
      { ingredient: 'имбирь', measurement: 'кг', value: 0.466 },
      { ingredient: 'каркадэ', measurement: 'гр', value: 100 },
      { ingredient: 'мускатный орех', measurement: 'гр', value: 45 },
      { ingredient: 'гвоздика молотая', measurement: 'гр', value: 25 },
      { ingredient: 'корица молотая', measurement: 'гр', value: 75 },
      { ingredient: 'бадьян', measurement: 'гр', value: 40 },
      { ingredient: 'итог', measurement: 'л', value: 40 }
    ], description: 'Закипятить воду, добавить сахар, лимонный сок, каркадэ, специи, имбирь предварительно натёртый, сок виноградный. После кипения выключить газ и добавить шкурки лимона, и нарезанный апельсин. Закрыть крышкой оставить настаиваться, чем дольше настаивается, тем вкуснее. Процедить перед разливом.', id: v4()
  },
  {
    title: 'шарлотка',
    value: 100,
    ingredients: [
      { ingredient: 'мука высший сорт', measurement: 'кг', value: 2.67 },
      { ingredient: 'манная крупа', measurement: 'кг', value: 2.29 },
      { ingredient: 'сахар', measurement: 'кг', value: 1.33 },
      { ingredient: 'грецкий орех', measurement: 'кг', value: 0.83 },
      { ingredient: 'яблоко', measurement: 'кг', value: 5.73 },
      { ingredient: 'масло подсолнечное', measurement: 'л', value: 1.15 },
      { ingredient: 'кефир', measurement: 'л', value: 3.82 },
      { ingredient: 'лимонная кислота', measurement: 'гр', value: 114.7 },
      { ingredient: 'сода', measurement: 'гр', value: 114.7 },
      { ingredient: 'ванилин', measurement: 'гр', value: 12.5 },
      { ingredient: 'выход противней размером 40х60 (5х8 нарезка)', measurement: 'шт', value: 2.54 }
    ],
    description: 'Яблоки нарезать на кусочки. Грецкий орех обжарить в конвектомате до характерного цвета и запаха, и мелко нарезать.  Смажьте противни маслом, а потом посыпте манкой, что бы они были покрыты тонким слоем манки, для того, что бы шарлотка не пристала после запекания к противню. Смешать муку, манку, масло, сахар, кефир, лимонную кислоту, соду, ванилин и вымесить тесто. Добавить туда яблоки и грецкий орех, вымешать. После замешивания теста лимонка и сода вступают в реакцию, которая поднимает тесто. Чтобы пирог поднялся, нужно после вымешивания тесто как можно быстрее поставить его печься.', id: v4()
  },
  {
    title: 'бурфи с семечками подсолнуха',
    value: 100,
    ingredients: [
      { ingredient: 'сухое молоко', measurement: 'кг', value: 1.867 },
      { ingredient: 'сахар', measurement: 'кг', value: 0.94 },
      { ingredient: 'семечки подсолнечника', measurement: 'кг', value: 0.64 },
      { ingredient: 'сливочное масло 82%', measurement: 'кг', value: 0.84 },
      { ingredient: 'сметана 26%', measurement: 'л', value: 1.12 },
      { ingredient: 'ванилин', measurement: 'гр', value: 6.5 },
      { ingredient: 'выход противней (7х9 нарезка)', measurement: 'шт', value: 1.587 },
      { ingredient: 'итог', measurement: 'кг', value: 4.47 }
    ],
    description: 'Семечки обжариваем в конвектомате до характерного запаха и цвета. В толстодонной кастрюле растапливаем сливочное масло и добавляем сахар или сахарную пудру, сделанную из сахара. Варим, пока кристалы сахара полностью не растворятся в масле. Добавляем ванилин и начинаем постепенно добавлять по пачке сухое молоко и семечки, вымешиваем, чтобы не было комков. Раскладываем в противень и убираем остывать в холодильник. Нарезаем по нужному размеру.', id: v4()
  },
  {
    title: 'бурфи лимонное',
    value: 100,
    ingredients: [
      { ingredient: 'сухое молоко', measurement: 'кг', value: 1.8 },
      { ingredient: 'сахар', measurement: 'кг', value: 0.94 },
      { ingredient: 'цукаты', measurement: 'кг', value: 0.6 },
      { ingredient: 'сливочное масло 82%', measurement: 'кг', value: 0.84 },
      { ingredient: 'сметана 26%', measurement: 'л', value: 1.12 },
      { ingredient: 'ванилин', measurement: 'гр', value: 6.5 },
      { ingredient: 'лимон', measurement: 'гр', value: 1.5 },
      { ingredient: 'куркума молотая', measurement: 'гр', value: 6.5 },
      { ingredient: 'выход противней (7х9 нарезка)', measurement: 'шт', value: 1.587 },
      { ingredient: 'итог', measurement: 'кг', value: 4.47 }
    ],
    description: 'Цукаты замачиваем в воде. В толстодонной кастрюле растапливаем сливочное масло и добавляем сахар или сахарную пудру, сделанную из сахара. Варим, пока кристалы сахара полностью не растворятся в масле. Добавляем ванилин, лимонный сок, цедру от лимонов, куркуму и начинаем постепенно добавлять по пачке сухое молоко и цукаты (из которых нужно слить воду), вымешиваем, чтобы не было комков. Раскладываем в противень и убираем остывать в холодильник. Нарезаем по нужному размеру.', id: v4()
  },
  {
    title: 'бурфи кунжутные',
    value: 100,
    ingredients: [
      { ingredient: 'сухое молоко', measurement: 'кг', value: 1.8 },
      { ingredient: 'сахар', measurement: 'кг', value: 0.94 },
      { ingredient: 'кунжут', measurement: 'кг', value: 0.7 },
      { ingredient: 'сливочное масло 82%', measurement: 'кг', value: 0.84 },
      { ingredient: 'сметана 26%', measurement: 'л', value: 1.12 },
      { ingredient: 'ванилин', measurement: 'гр', value: 6.5 },
      { ingredient: 'выход противней (7х9 нарезка)', measurement: 'шт', value: 1.587 },
      { ingredient: 'итог', measurement: 'кг', value: 4.47 }
    ],
    description: 'Кунжут обжариваем в конвектомате до характерного запаха и цвета. 50% кунжута смолоть в мелкую фракцию. В толстодонной кастрюле растапливаем сливочное масло и добавляем сахар или сахарную пудру, сделанную из сахара. Варим, пока кристалы сахара полностью не растворятся в масле. Добавляем ванилин и начинаем постепенно добавлять по пачке сухое молоко и кунжут, вымешиваем, чтобы не было комков. Раскладываем в противень и убираем остывать в холодильник. Нарезаем как нужно.', id: v4()
  },
  {
    title: 'пицца',
    value: 100,
    ingredients: [
      { ingredient: 'тесто' },
      { ingredient: 'мука высший сорт', measurement: 'кг', value: 1.4 },
      { ingredient: 'сода', measurement: 'гр', value: 8 },
      { ingredient: 'кефир', measurement: 'л', value: 1 },
      { ingredient: 'сахар', measurement: 'кг', value: 0.025 },
      { ingredient: 'соль', measurement: 'гр', value: 18 },
      { ingredient: 'масло подсолнечное', measurement: 'л', value: 0.42 },
      { ingredient: 'соус' },
      { ingredient: 'томатная паста', measurement: 'кг', value: 0.25 },
      { ingredient: 'вода', measurement: 'л', value: 0.07 },
      { ingredient: 'асафетида', measurement: 'гр', value: 3 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 1.5 },
      { ingredient: 'сахар', measurement: 'кг', value: 0.056 },
      { ingredient: 'соль', measurement: 'гр', value: 15 },
      { ingredient: 'начинка' },
      { ingredient: 'томаты', measurement: 'кг', value: 1.5 },
      { ingredient: 'перец', measurement: 'кг', value: 0.9 },
      { ingredient: 'маслины', measurement: 'кг', value: 2.26 },
      { ingredient: 'сыр моцарелла', measurement: 'кг', value: 1.5 },
      { ingredient: 'выход противней размером 40х60 (5х8 нарезка)', measurement: 'шт', value: 2.5 },
      { ingredient: 'итог', measurement: 'шт', value: 100 }
    ],
    description: 'Замешать тесто из ингредиентов для теста и оставить накрытым чем-либо, чтобы не заветривалось, отдыхать минут 15-30. Сыр натереть, помидоры, перец, маслины и другую начинку нарезать. Для соуса в кастрюле нагреть масло, добавить специи и обжарить их. Добавить томатную пасту и обжарить её, добавить соль, сахар, воду. Разделить тесто на нужное количество кусков, согласно количеству противней, раскатать тесто и выложить на противень, полить частью соуса, выложить сыр, наложить начинку. Если предусмотрен дополнительный соус сверху (майонез, сметана, песто и т.д.), выложить сеточку. Запекать в духовке при 180-200 градусах. Есть альтернативный вариант, при котором сначала запекается тесто, а потом все накладывается и немного подпекается.', id: v4()
  },
  {
    title: 'шахи панир',
    value: 100,
    ingredients: [
      { ingredient: 'сливки 10%', measurement: 'л', value: 7.5 },
      { ingredient: 'адыгейский сыр', measurement: 'кг', value: 0.5 },
      { ingredient: 'томаты', measurement: 'кг', value: 2.6 },
      { ingredient: 'перец', measurement: 'кг', value: 2.6 },
      { ingredient: 'имбирь', measurement: 'кг', value: 0.42 },
      { ingredient: 'томатная паста', measurement: 'кг', value: 0.6 },
      { ingredient: 'сливочное масло 82%', measurement: 'кг', value: 0.5 },
      { ingredient: 'кешью', measurement: 'кг', value: 0.4 },
      { ingredient: 'соль', measurement: 'гр', value: 158 },
      { ingredient: 'сахар', measurement: 'гр', value: 623 },
      { ingredient: 'гарам масала', measurement: 'гр', value: 56 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 10 },
      { ingredient: 'куркума молотая', measurement: 'гр', value: 15 },
      { ingredient: 'кардамон молотый', measurement: 'гр', value: 63 },
      { ingredient: 'корица молотая', measurement: 'гр', value: 15 },
      { ingredient: 'итог', measurement: 'л', value: 20 }
    ],
    description: 'Томаты среднего размера нарезаем дольками (как в апельсине). В идеале предварительно закинуть в кипяток на минуту и снять шкурки. Панир режем бруском размером с две фаланги указательного пальца. Перцы прямоугольниками примерно, как панир. Подготавливаем специи. Греем кастрюлю, кладем масло и имбирь, жарим до аромата, добавляем все сухое (специи, соль, сахар), прогреваем до аромата, добавляем томатную пасту и жарим пару минут, мешая, чтобы она потемнела и масло стало красным и отделилось от пасты, добавляем томаты и перцы и тушим вместе, аккуратно помешивая изредка, до полу готовности. Добавляем смолотый кешью, сливки и сметану. Аккуратно размешиваем и доводим до стабильного кипения, загружаем нарезанный панир, аккуратно размешиваем, снова доводим до кипения, выключаем, даем настояться не менее получаса.', id: v4()
  },
  {
    title: '[халава с бананами]',
    value: 100,
    ingredients: [
      { ingredient: 'манная крупа', measurement: 'кг', value: 3.6 },
      { ingredient: 'сахар', measurement: 'кг', value: 7.1 },
      { ingredient: 'соль', measurement: 'гр', value: 24 },
      { ingredient: 'сливочное масло 82%', measurement: 'кг', value: 3.6 },
      { ingredient: 'изюм', measurement: 'кг', value: 0.5 },
      { ingredient: 'фундук', measurement: 'кг', value: 0.5 },
      { ingredient: 'вода', measurement: 'л', value: 10 },
      { ingredient: 'банан', measurement: 'кг', value: 5.9 },
      { ingredient: 'ванилин', measurement: 'гр', value: 5 },
      { ingredient: 'итог', measurement: 'кг', value: 25 }
    ],
    description: 'Сделать сироп: сахар положить в кастрюлю и сделать карамель, отдельно закипятить воду. добавить горячую воду когда сахар превратится в карамель и вымешать пока карамель не превратиться в сироп. функдук обжарить. изюм замочить. бананы нарезать. В отдельной кастрюле растопить масло, и обжарить в нем манку до состояния воздушности, затем добавить туда соль, ванилин, изюм (без воды), карамельный сироп и начать вымешивать, пока не начнет загустевать, тогда добавить бананы и вымешивать держа на малом огне до состояния средней густоты, затем выключить огонь и поставить настаиваться. Перед подачей добавить орехи и размешать.', id: v4()
  },
  {
    title: 'пури',
    value: 100,
    ingredients: [
      { ingredient: 'мука 1й сорт', measurement: 'кг', value: 2 },
      { ingredient: 'мука грубого помола', measurement: 'кг', value: 1 },
      { ingredient: 'сахар', measurement: 'кг', value: 7.1 },
      { ingredient: 'соль', measurement: 'гр', value: 100 },
      { ingredient: 'сливочное масло 82%', measurement: 'кг', value: 0.3 },
      { ingredient: 'вода', measurement: 'л', value: 1.8 },
      { ingredient: 'тмин', measurement: 'гр', value: 20 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 10 },
      { ingredient: 'куркума молотая', measurement: 'гр', value: 15 },
      { ingredient: 'масло подсолнечное', measurement: 'кг', value: 3 }
    ],
    description: 'Смешать все сухие компоненты. Добавить воду. Замесить тесто и дать настояться минут 15. После этого, отрезать от теста небольшие кусочки (~ 50 гр.), и раскатать из них красивые круглые лепешки, толщиной 2-3 мм. Жарить пури во фритюре 1-2 минуты (для партии). При этом они должны надуваться как мячики. Пури готовы, когда при обжаривании становятся золотистыми.', id: v4()
  },
  {
    title: 'ласси',
    value: 100,
    ingredients: [
      { ingredient: 'ряженка 3,6%', measurement: 'л', value: 13 },
      { ingredient: 'вода', measurement: 'л', value: 2 },
      { ingredient: 'сахар', measurement: 'кг', value: 2.1 },
      { ingredient: 'банан', measurement: 'кг', value: 5 },
      { ingredient: 'клубника', measurement: 'кг', value: 2 },
      { ingredient: 'ванилин', measurement: 'гр', value: 10 },
      { ingredient: 'итог', measurement: 'л', value: 22 }
    ],
    description: 'Смешать ряженку, сахар, воду, ванилин и мешать до растворения сахара. Добавить нарезанные бананы и измельченную в блендере клубнику.', id: v4()
  },
  {
    title: 'сочники',
    value: 100,
    ingredients: [
      { ingredient: 'творог 9%', measurement: 'л', value: 5.9 },
      { ingredient: 'сливочное масло 82%', measurement: 'кг', value: 2 },
      { ingredient: 'мука высший сорт', measurement: 'кг', value: 4 },
      { ingredient: 'ванилин', measurement: 'гр', value: 15 },
      { ingredient: 'сода', measurement: 'гр', value: 20 },
      { ingredient: 'сахар', measurement: 'кг', value: 2 }
    ],
    description: 'Смешиваем творог с мягким маслом до однородной консистенции. Смешать муку, ванилин и соду и соединить с массой из творога и масла. Замесить тесто. Тесто должно быть мягким, но не липнуть к рукам. Если липнет, то добавлять муку, пока не перестанет липнуть. В противень насыпать сахар слое. Из теста сформовать шарики по 80 грамм. Шарик кладём на сахар и раздавливаем ладонью сверху, до получения лепёшки диаметром 8 см. Нижняя часть лежит в сахаре, а верхняя без. Складываем лепёшку пополам, сахаром внутрь. Одной стороной лепёшку раздавливаем в сахаре. Складываем пополам сахаром внутрь, и ещё раз придавливаем в сахаре. Не сахарной стороной выкладываем на противень. Запекаем при 180 градусов Цельсия 15-20 минут.', id: v4()
  },
  {
    title: 'алу шак',
    value: 100,
    ingredients: [
      { ingredient: 'шпинат замороженный', measurement: 'кг', value: 9.5 },
      { ingredient: 'картошка', measurement: 'кг', value: 12 },
      { ingredient: 'сливочное масло 82%', measurement: 'кг', value: 0.3 },
      { ingredient: 'адыгейский сыр', measurement: 'кг', value: 3.8 },
      { ingredient: 'сметана 26%', measurement: 'кг', value: 2.9 },
      { ingredient: 'кориандр молотый', measurement: 'гр', value: 30 },
      { ingredient: 'куркума молотая', measurement: 'гр', value: 30 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 10 },
      { ingredient: 'асафетида', measurement: 'гр', value: 50 },
      { ingredient: 'соль', measurement: 'гр', value: 100 },
      { ingredient: 'черная соль', measurement: 'гр', value: 100 },
      { ingredient: 'итог', measurement: 'л', value: 22 }
    ],
    description: 'Шпинат размораживаем в кастрюле с горячей водой. Картошку и адыгейский сыр режем кубиками 2х2 см и запекаем в конвектомате до золотистой корочки. В кастрюле расплавляем масло и обжариваем специи. Шпинат процеживаем через сито, чтобы избавиться от лишней воды, и добавляем к обжаренным специям. Затем добавляем остальные ингредиенты и перемешиваем. Оставляем настояться.', id: v4()
  },
  {
    title: 'пакоры из цветной капусты',
    value: 100,
    ingredients: [
      { ingredient: 'цветная капуста', measurement: 'кг', value: 12 },
      { ingredient: 'масло для фритюра' },
      { ingredient: 'масло подсолнечное', measurement: 'кг', value: 3 },
      { ingredient: 'кляр' },
      { ingredient: 'нутовая мука', measurement: 'кг', value: 2.5 },
      { ingredient: 'вода', measurement: 'л', value: 5 },
      { ingredient: 'кунжут', measurement: 'кг', value: 0.5 },
      { ingredient: 'карри молотый', measurement: 'гр', value: 25 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 25 },
      { ingredient: 'калинджи', measurement: 'гр', value: 50 },
      { ingredient: 'куркума молотая', measurement: 'гр', value: 30 },
      { ingredient: 'асафетида', measurement: 'гр', value: 30 },
      { ingredient: 'соль', measurement: 'гр', value: 90 },
      { ingredient: 'сода', measurement: 'гр', value: 25 }
    ],
    description: 'Цветную капусту делим на соцветия и запекаем или варим до состояния готовности, но чтобы они не расползались. Для приготовления кляра смешиваем все ингредиенты, предварительно обжариваем кунжут. Берем масло для фритюра, наливаем в глубокую кастрюлю, нагреваем и жарим цветную капусту, обваливая ее в приготовленном кляре.', id: v4()
  },
  {
    title: 'пудинг чиа (150 гр порция)',
    value: 100,
    ingredients: [
      { ingredient: 'ряженка 3,6%', measurement: 'л', value: 14 },
      { ingredient: 'сахар', measurement: 'кг', value: 1.4 },
      { ingredient: 'овсяная крупа', measurement: 'кг', value: 0.67 },
      { ingredient: 'семена чиа', measurement: 'кг', value: 0.525 },
      { ingredient: 'семена льна', measurement: 'кг', value: 0.436 },
      { ingredient: 'фундук', measurement: 'кг', value: 0.6 },
      { ingredient: 'клубника', measurement: 'кг', value: 3 },
      { ingredient: 'кардамон молотый', measurement: 'гр', value: 20 },
      { ingredient: 'соль', measurement: 'гр', value: 32 },
      { ingredient: 'итог', measurement: 'кг', value: 15 }
    ],
    description: 'Ряженку ложим в большую емкость (масса увеличится в итоге в 2-3 раза). Смешиваем все сухие ингредиенты (фундук предварительно обжариваем и измельчаем, клубнику нарезаем) и постепенно добавляем их в ряженку. Тщательно перемешиваем и оставляем в холодильнике на ночь. Перед раскладыванием снова тщательно перемешиваем.', id: v4()
  },
  {
    title: 'кофты из морковки (2 шт на человека + 10% запаса)',
    value: 100,
    ingredients: [
      { ingredient: 'тесто' },
      { ingredient: 'морковка', measurement: 'кг', value: 6.6 },
      { ingredient: 'картошка', measurement: 'кг', value: 3.2 },
      { ingredient: 'грецкий орех', measurement: 'кг', value: 0.3 },
      { ingredient: 'нутовая мука', measurement: 'кг', value: 3.2 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 20 },
      { ingredient: 'кориандр молотый', measurement: 'гр', value: 22 },
      { ingredient: 'соль', measurement: 'гр', value: 84 },
      { ingredient: 'соус' },
      { ingredient: 'томатная паста', measurement: 'кг', value: 2.6 },
      { ingredient: 'крахмал кукурузный', measurement: 'кг', value: 0.36 },
      { ingredient: 'кефир', measurement: 'л', value: 4.4 },
      { ingredient: 'масло подсолнечное', measurement: 'кг', value: 0.4 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 30 },
      { ingredient: 'корица молотая', measurement: 'гр', value: 15 },
      { ingredient: 'гвоздика молотая', measurement: 'гр', value: 10 },
      { ingredient: 'кумин молотый', measurement: 'гр', value: 10 },
      { ingredient: 'кориандр молотый', measurement: 'гр', value: 15 },
      { ingredient: 'лавровый лист молотый', measurement: 'гр', value: 15 },
      { ingredient: 'сахар', measurement: 'кг', value: 1.3 },
      { ingredient: 'соль', measurement: 'гр', value: 158 },
      { ingredient: 'масло для фритюра' },
      { ingredient: 'масло подсолнечное', measurement: 'кг', value: 2.8 },
      { ingredient: 'итог', measurement: 'шт', value: 220 }
    ],
    description: 'Овощи натереть на русскую терку. Смешать с мукой, солью и специями. Для соуса в кастрюле нагреть масло, добавить специи и обжарить их. Добавить томатную пасту и обжарить её, добавить остальные ингредиенты (крахмал предварительно растворить в небольшом количестве горячей воды). Из теста формируем шарик, в центр шарика ложим грецкий орех, и жарим их во фритюре.', id: v4()
  },
  {
    title: 'картошка ломтиками',
    value: 100,
    ingredients: [
      { ingredient: 'картошка', measurement: 'кг', value: 30 },
      { ingredient: 'укроп свежий', measurement: 'кг', value: 0.1 },
      { ingredient: 'масло подсолнечное', measurement: 'кг', value: 1.5 },
      { ingredient: 'розмарин', measurement: 'гр', value: 35 },
      { ingredient: 'кориандр молотый', measurement: 'гр', value: 20 },
      { ingredient: 'лавровый лист молотый', measurement: 'гр', value: 10 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 20 },
      { ingredient: 'соль', measurement: 'гр', value: 135 },
      { ingredient: 'итог', measurement: 'кг', value: 20 }
    ],
    description: 'Картошку режем на дольки, смешиваем с маслом, специями, солью и запекаем в конвектомате до золотистой корочки. Перекладываем в емкость и смешиваем с нарезанным свежим укропом.', id: v4()
  },
  {
    title: 'томатный соус',
    value: 100,
    ingredients: [
      { ingredient: 'томаты', measurement: 'кг', value: 6 },
      { ingredient: 'томатная паста', measurement: 'кг', value: 3.5 },
      { ingredient: 'крахмал кукурузный', measurement: 'кг', value: 0.4 },
      { ingredient: 'вода', measurement: 'л', value: 2 },
      { ingredient: 'масло подсолнечное', measurement: 'кг', value: 1 },
      { ingredient: 'сахар', measurement: 'кг', value: 1.2 },
      { ingredient: 'розмарин', measurement: 'гр', value: 30 },
      { ingredient: 'гвоздика молотая', measurement: 'гр', value: 10 },
      { ingredient: 'паприка копченая молотая', measurement: 'гр', value: 30 },
      { ingredient: 'лавровый лист молотый', measurement: 'гр', value: 10 },
      { ingredient: 'орегано', measurement: 'гр', value: 15 },
      { ingredient: 'базилик сухой', measurement: 'гр', value: 15 },
      { ingredient: 'майоран', measurement: 'гр', value: 15 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 20 },
      { ingredient: 'соль', measurement: 'гр', value: 80 },
      { ingredient: 'итог', measurement: 'кг', value: 20 }
    ],
    description: 'В кастрюле нагреть масло, добавить специи и обжарить их. Добавить томатную пасту и обжарить её, добавить томаты нарезанные мелким кубиком и потушить минут 5, добавить остальное (крахмал предварительно растворить в небольшом количестве горячей воды).', id: v4()
  },
  {
    title: 'чатни вишневое',
    value: 100,
    ingredients: [
      { ingredient: 'вишня', measurement: 'кг', value: 7.5 },
      { ingredient: 'лимон', measurement: 'кг', value: 3 },
      { ingredient: 'вода', measurement: 'л', value: 2 },
      { ingredient: 'масло подсолнечное', measurement: 'кг', value: 0.5 },
      { ingredient: 'имбирь', measurement: 'кг', value: 0.5 },
      { ingredient: 'крахмал кукурузный', measurement: 'кг', value: 0.3 },
      { ingredient: 'сахар', measurement: 'кг', value: 2.3 },
      { ingredient: 'анис', measurement: 'гр', value: 30 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 28 },
      { ingredient: 'чили сухой молотый', measurement: 'гр', value: 10 },
      { ingredient: 'корица молотая', measurement: 'гр', value: 20 },
      { ingredient: 'бадьян', measurement: 'гр', value: 28 },
      { ingredient: 'гвоздика молотая', measurement: 'гр', value: 10 },
      { ingredient: 'лавровый лист молотый', measurement: 'гр', value: 10 },
      { ingredient: 'соль', measurement: 'гр', value: 75 },
      { ingredient: 'итог', measurement: 'кг', value: 20 }
    ],
    description: 'Имбирь, лимон, измельчать блендером, добавив 1 литр воды. Потом все это тушим с маслом на хорошем огне, помешивая. Доводим до кипения. Через 5 минут кипения добавляем вишню. Довести до кипения и поварить 10 минут. Добавляем оставшуюся воду взбитую блендером с крахмалом, солью и сахаром. Довести до кипения. Выключить вынести на холод, чтобы остыло до градусов 10-15. Часть вишни так же можно перебить блендером.', id: v4()
  },
  {
    title: 'казинаки',
    value: 100,
    ingredients: [
      { ingredient: 'сахар', measurement: 'кг', value: 3.1 },
      { ingredient: 'сметана 26%', measurement: 'кг', value: 3.1 },
      { ingredient: 'кунжут', measurement: 'кг', value: 1.5 },
      { ingredient: 'семена льна', measurement: 'кг', value: 0.8 },
      { ingredient: 'фундук', measurement: 'кг', value: 0.9 },
      { ingredient: 'арахис', measurement: 'кг', value: 1.5 },
      { ingredient: 'семечки подсолнечника', measurement: 'кг', value: 1.5 },
      { ingredient: 'соль', measurement: 'гр', value: 25 }
    ],
    description: 'Кунжут, арахис, семечки подсолнуха, фундук предварительно обжарить или запечь в конвектомате при 160 градусах до характерного запаха и цвета. Учитываем что для каждого ореха свое время приготовления. Топим сахар в кастрюле в карамель, добавляем соль, сметану и вымешиваем, затем все орехи (фундук очищаем от шелухи) и выпариваем лишнюю влагу. Перекладываем в противни и когда немного остынут нарезаем, потому что потом может не нарезаться.', id: v4()
  },
  {
    title: 'самосы',
    value: 100,
    ingredients: [
      { ingredient: 'тесто' },
      { ingredient: 'мука высший сорт', measurement: 'кг', value: 2.3 },
      { ingredient: 'мука грубого помола', measurement: 'кг', value: 1.1 },
      { ingredient: 'соль', measurement: 'гр', value: 88 },
      { ingredient: 'кефир', measurement: 'л', value: 2 },
      { ingredient: 'сливочное масло 82%', measurement: 'кг', value: 0.6 },
      { ingredient: 'начинка' },
      { ingredient: 'цветная капуста', measurement: 'кг', value: 6.7 },
      { ingredient: 'томаты', measurement: 'кг', value: 2 },
      { ingredient: 'шпинат замороженный', measurement: 'кг', value: 1.3 },
      { ingredient: 'петрушка свежая', measurement: 'кг', value: 1.3 },
      { ingredient: 'адыгейский сыр', measurement: 'кг', value: 2 },
      { ingredient: 'кукуруза в банке', measurement: 'шт', value: 1.1 },
      { ingredient: 'сметана 26%', measurement: 'л', value: 1 },
      { ingredient: 'томатная паста', measurement: 'кг', value: 1 },
      { ingredient: 'сахар', measurement: 'кг', value: 0.5 },
      { ingredient: 'соль', measurement: 'гр', value: 80 },
      { ingredient: 'гарам масала', measurement: 'гр', value: 30 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 15 },
      { ingredient: 'кориандр молотый', measurement: 'гр', value: 15 },
      { ingredient: 'асафетида', measurement: 'гр', value: 30 },
      { ingredient: 'масло подсолнечное', measurement: 'л', value: 0.3 },
      { ingredient: 'масло для фритюра' },
      { ingredient: 'масло подсолнечное', measurement: 'л', value: 3 }
    ],
    description: 'Для теста все смешиваем, вымешиваем и убираем настояться. Для начинки: цветную капусту на мелкие соцветия и запекаем, адыгейский сыр нарезаем 2х2 см и запекаем, шпинат размораживаем и через сито убираем лишнюю влагу, томаты нарезаем кубиком 2х2 см. делаем масалу: масло обжариваем со специями, затем обжариваем томатную пасту, добавляем сахар и сметану. Смешиваем все ингредиенты начинки. Формируем самосы и запекаем в духовке или жарим во фритюре.', id: v4()
  },
  {
    title: 'муравейник',
    value: 100,
    ingredients: [
      { ingredient: 'тесто' },
      { ingredient: 'мука высший сорт', measurement: 'кг', value: 3.3 },
      { ingredient: 'сливочное масло 82%', measurement: 'кг', value: 1.3 },
      { ingredient: 'кефир', measurement: 'л', value: 0.8 },
      { ingredient: 'соль', measurement: 'гр', value: 88 },
      { ingredient: 'ванилин', measurement: 'гр', value: 6 },
      { ingredient: 'крем' },
      { ingredient: 'сгущенка вареная, банка', measurement: 'банка', value: 11.7 },
      { ingredient: 'сливочное масло 82%', measurement: 'кг', value: 0.6 },
      { ingredient: 'арахис', measurement: 'кг', value: 0.8 },
      { ingredient: 'выход противней размером 40х60 (5х8 нарезка)', measurement: 'шт', value: 2.5 },
      { ingredient: 'итог', measurement: 'шт', value: 100 }
    ],
    description: 'Тесто: все мешаем (масло не замороженное должно быть). Тесто тонко раскатываем на противне и запекаем при 180 градусах до готовности, затем или ломаем до необходимой фракции, или блендерим в пыль. Крем: мягкое сливочное масло и варёную сгущенку смешиваем и миксером сзбиваем до получения состояния крема. Арахис обжариваем в конвектовате 160 градусах до золотистого цвета и характерного аромата, затем измельчаем. Все смешаваем всете: тесто, крем и арахис. Раскладываем на противня и в холодильник, оставляем на ночь или 7-8 часов настояться.', id: v4()
  },
  {
    title: 'алу патры',
    value: 100,
    ingredients: [
      { ingredient: 'тесто' },
      { ingredient: 'мука высший сорт', measurement: 'кг', value: 4.3 },
      { ingredient: 'вода', measurement: 'л', value: 2.8 },
      { ingredient: 'соль', measurement: 'гр', value: 84 },
      { ingredient: 'начинка' },
      { ingredient: 'картошка', measurement: 'кг', value: 5 },
      { ingredient: 'соль', measurement: 'гр', value: 84 },
      { ingredient: 'кунжут', measurement: 'кг', value: 0.25 },
      { ingredient: 'кокосовая стружка', measurement: 'кг', value: 0.3 },
      { ingredient: 'крахмал картофельный', measurement: 'кг', value: 0.175 },
      { ingredient: 'карри молотый', measurement: 'гр', value: 35 },
      { ingredient: 'асафетида', measurement: 'гр', value: 35 },
      { ingredient: 'масло для фритюра' },
      { ingredient: 'масло подсолнечное', measurement: 'л', value: 3 },
      { ingredient: 'выход противней размером 40х60 (5х8 нарезка)', measurement: 'шт', value: 2.5 },
      { ingredient: 'итог', measurement: 'шт', value: 100 }
    ],
    description: 'Отварите картошку, разомните ее в пюре и остудите. Смешайте пюре с специями, крахмалом и кунжутом и кокосовой стружкой, которые предварительно обжарить. Затем замешайте тесто, сначала смешав сухие компоненты, затем добавив воду, и оставьте настояться в течение 15 минут. Раскатайте тесто тонким слоем толщиной около 2 мм. На раскатанное тесто выложите картофельное пюре и разгладьте его равномерным слоем, оставив место без картошки на одном длинном краю для склеивания. Закрутите в рулет, начиная с края, где находится картошка. После приготовления рулета нарежьте его на равные кусочки толщиной около 1-1,5 см. Обжарьте полученные кусочки на сковороде с маслом или во фритюре.', id: v4()
  }, {
    title: 'салат свежий',
    value: 100,
    ingredients: [
      { ingredient: 'томаты', measurement: 'кг', value: 6.7 },
      { ingredient: 'огурцы', measurement: 'кг', value: 6.7 },
      { ingredient: 'пекинская капуста', measurement: 'кг', value: 10 }
    ],
    description: 'нарезать всё для салата', id: v4()
  },
  {
    title: 'соус ореховый',
    value: 100,
    ingredients: [
      { ingredient: 'арахис', measurement: 'кг', value: 1.9 },
      { ingredient: 'вода', measurement: 'л', value: 3 },
      { ingredient: 'масло подсолнечное', measurement: 'л', value: 1.4 },
      { ingredient: 'соль', measurement: 'гр', value: 95 },
      { ingredient: 'черная соль', measurement: 'гр', value: 63 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 14.5 },
      { ingredient: 'горчичный порошок', measurement: 'гр', value: 10 },
      { ingredient: 'мускатный орех', measurement: 'гр', value: 20 },
      { ingredient: 'асафетида', measurement: 'гр', value: 20 },
      { ingredient: 'гуаровая камедь', measurement: 'гр', value: 10 },
      { ingredient: 'сахар', measurement: 'кг', value: 0.246 },
      { ingredient: 'сок лимонный', measurement: 'л', value: 0.328 }
    ],
    description: 'Запекайте арахис в конвектомате при 180 градусах, до насыщенного цвета и запаха. Немного остудите орехи и измельчите их насухо в чаше блендера в пасту. Добавляйте остальные ингредиенты и взбейте на максимальной скорости до однородной массы. Уберите в холодное место.', id: v4()
  },
  {
    title: 'соус ореховый экадашный',
    value: 100,
    ingredients: [
      { ingredient: 'арахис', measurement: 'кг', value: 1.9 },
      { ingredient: 'вода', measurement: 'л', value: 3 },
      { ingredient: 'масло подсолнечное', measurement: 'л', value: 1.4 },
      { ingredient: 'соль', measurement: 'гр', value: 116 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 14.5 },
      { ingredient: 'мускатный орех', measurement: 'гр', value: 20 },
      { ingredient: 'гуаровая камедь', measurement: 'гр', value: 10 },
      { ingredient: 'сахар', measurement: 'кг', value: 0.246 },
      { ingredient: 'сок лимонный', measurement: 'л', value: 0.328 }
    ],
    description: 'Запекайте арахис в конвектомате при 180 градусах, до насыщенного цвета и запаха. Немного остудите орехи и измельчите их насухо в чаше блендера в пасту. Добавляйте остальные ингредиенты и взбейте на максимальной скорости до однородной массы. Уберите в холодное место.', id: v4()
  },
  {
    title: 'гауранга экадашная',
    value: 100,
    ingredients: [
      { ingredient: 'картошка', measurement: 'кг', value: 30 },
      { ingredient: 'адыгейский сыр', measurement: 'кг', value: 3.3 },
      { ingredient: 'сыр сулугуни', measurement: 'кг', value: 2.7 },
      { ingredient: 'сметана 26%', measurement: 'л', value: 3.3 },
      { ingredient: 'сливочное масло 82%', measurement: 'кг', value: 1 },
      { ingredient: 'укроп свежий', measurement: 'кг', value: 0.6 },
      { ingredient: 'вода', measurement: 'л', value: 2 },
      { ingredient: 'розмарин', measurement: 'гр', value: 10 },
      { ingredient: 'кориандр молотый', measurement: 'гр', value: 10 },
      { ingredient: 'куркума молотая', measurement: 'гр', value: 10 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 45 },
      { ingredient: 'паприка копченая молотая', measurement: 'гр', value: 10 },
      { ingredient: 'соль', measurement: 'гр', value: 310 }
    ],
    description: 'Обжарьте специи с маслом в большой кастрюле. Добавьте сметану, соль, зелень, воду и адыгейский сыр, хорошо перемешайте. Картошку предварительно нарежьте на слайсы толщиной 0.5 см и отварите или запеките до готовности. После этого добавьте картошку в кастрюлю, разделяя слипшиеся пластины, и тщательно перемешайте. Выложите содержимое в противни и поместите их в разогретую до 200-220 градусов духовку. Пеките до готовности. Если блюдо готово или почти готово, посыпьте моцареллой и отправьте обратно в духовку еще на 5 минут до расплавления сыра.', id: v4()
  },
  {
    title: 'оливье',
    value: 100,
    ingredients: [
      { ingredient: 'картошка', measurement: 'кг', value: 5.6 },
      { ingredient: 'морковка', measurement: 'кг', value: 4 },
      { ingredient: 'адыгейский сыр', measurement: 'кг', value: 3.2 },
      { ingredient: 'сыр чечил/джил', measurement: 'гр', value: 0.37 },
      { ingredient: 'огурцы маринованные', measurement: 'кг', value: 2.2 },
      { ingredient: 'укроп свежий', measurement: 'кг', value: 0.15 },
      { ingredient: 'петрушка свежая', measurement: 'кг', value: 0.15 },
      { ingredient: 'майонез постный', measurement: 'кг', value: 4 },
      { ingredient: 'черная соль', measurement: 'гр', value: 60 },
      { ingredient: 'асафетида', measurement: 'гр', value: 25 },
      { ingredient: 'черный перец молотый', measurement: 'гр', value: 5 },
      { ingredient: 'горчичный порошок', measurement: 'гр', value: 10 },
      { ingredient: 'сахар', measurement: 'кг', value: 0.096 },
      { ingredient: 'сок лимонный', measurement: 'л', value: 0.06 },
      { ingredient: 'горох в банке', measurement: 'шт', value: 4.75 },
      { ingredient: 'итог', measurement: 'шт', value: 17.8 }
    ],
    description: 'Морковь почистить и отварить, нарезать размером с горох. Картофель сначала почистить и нарезать, а потом отварить с лимонной кислотой или соком лимона в большом количестве воды. Засыпать в кипяток картофель, когда будет готов слить кипяток и залить холодной водой, чтобы не переварился. Адыгейский сыр и огурцы нарезать размером с горох. Джил смолоть в порошок в блендере насухо. Огурцы нарезать размером с горох. Укроп и петрушку нарезать. Все замешать и в холодильник.', id: v4()
  }
]

