const db = require('./server/db')
const {NationalPark} = require('./server/db/models')

async function seed() {
    await db.sync({force: true})
    console.log('db synced!')

    const parks = await Promise.all([
        NationalPark.create(
        {"category":"Natural",
        "created_at":42,
        "criteria_txt":"(vii)(viii)(ix)(x)",
        "danger":null,
        "date_inscribed":"1979",
        "extension":1,
        "historical_description":"<p>Established September 1993, under the provisions of the Park Act.</p>",
        "http_url":"http://whc.unesco.org/en/list/72",
        "id":"41b3a967-ddcc-4837-b4c1-8ace91af0338",
        "id_number":72,
        "image_url":"http://whc.unesco.org/uploads/sites/site_72.jpg",
        "iso_code":"ca,us",
        "justification":null,
        "latitude":61.19758224487305,
        "location":"Kluane: Yukon Territory (Canada) and Alaska (USA)\r\n\r\nGlacier Bay:  Alaska (USA)\r\n\r\nTatshenshini:  Province of British Columbia (Canada)",
        "long_description":"Put info here",
        "longitude":-113.90416717529297,
        "region":"Europe and North America",
        "revision":1,
        "secondary_dates":null,
        "short_description":"In 1932 Waterton Lakes National Park (Alberta, Canada) was combined with the Glacier National Park (Montana, United States) to form the world's first International Peace Park. Situated on the border between the two countries and offering outstanding scenery, the park is exceptionally rich in plant and mammal species as well as prairie, forest, and alpine and glacial features.",
        "site":"Waterton Glacier International Peace Park",
        "states":"Canada,United States of America",
        "transboundary":1,
        "unique_number":407,
        "updated_at":42})
    ])

    console.log(`seeded ${parks.length} parks`)
}

async function runSeed() {
    console.log('seeding...')
    try {
        await seed()
    } catch(err) {
        console.log(err)
    } finally {
        console.log('closing db connection')
        await db.close()
        console.log('db connection closed')
    }
}

if(module === require.main) {
    runSeed()
}

module.exports = seed