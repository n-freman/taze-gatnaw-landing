import os
import asyncio
import urllib.request

os.environ["FAL_KEY"] = os.getenv("FAL_KEY", "")
os.environ["FAL_RUN_HOST"] = "api.flymy.ai/api/v2"

import fal_client


images = [
    {
        "name": "hero-bg",
        "prompt": "Cinematic wide aerial photograph of a long freight train carrying cylindrical LNG tanker cars through vast Central Asian desert landscape at golden hour, dramatic sky with orange and blue tones, endless steppe terrain, professional industrial photography, 8k quality",
        "aspect_ratio": "21:9",
    },
    {
        "name": "services-rail",
        "prompt": "Professional photograph of modern railway LNG tank cars in a row at an industrial rail terminal, steel cylindrical tankers with safety markings, railway infrastructure, overcast sky, sharp focus, industrial corporate photography",
        "aspect_ratio": "3:2",
    },
    {
        "name": "services-truck",
        "prompt": "Professional photograph of a modern white LNG tanker truck driving on a desert highway in Central Asia, cylindrical gas tanker trailer, clear sky, arid landscape, corporate industrial photography, sharp detail",
        "aspect_ratio": "3:2",
    },
    {
        "name": "fleet",
        "prompt": "Wide aerial photograph of an industrial gas storage and distribution facility with multiple spherical LNG storage tanks, railway sidings with tanker cars, truck loading bays, modern infrastructure, blue sky, professional drone photography",
        "aspect_ratio": "16:9",
    },
    {
        "name": "safety",
        "prompt": "Close-up photograph of safety equipment and monitoring systems at an LNG gas facility, pressure gauges, safety valves, hazard warning signs, worker in safety helmet and high-visibility vest inspecting equipment, professional industrial photography",
        "aspect_ratio": "4:3",
    },
    {
        "name": "geography",
        "prompt": "Stylized aerial photograph of railway tracks and highways stretching across vast Turkmen desert landscape, converging routes, dramatic perspective from above, golden sand dunes, transportation infrastructure cutting through terrain, cinematic photography",
        "aspect_ratio": "16:9",
    },
    {
        "name": "about",
        "prompt": "Professional corporate photograph of an LNG tanker train passing through a modern railway station in Central Asia, clean infrastructure, professional setting, warm lighting, conveying reliability and scale of operations",
        "aspect_ratio": "4:5",
    },
]

os.makedirs("public/images", exist_ok=True)


async def generate_one(img):
    print(f"Starting: {img['name']}")
    try:
        result = await fal_client.run_async(
            "flymyai/nano-banana-pro-fal-like",
            arguments={
                "prompt": img["prompt"],
                "image_size": "4K",
                "aspect_ratio": img["aspect_ratio"],
            },
        )
        url = result["images"][0]["url"]
        outpath = f"public/images/{img['name']}.jpg"
        print(f"Downloading: {img['name']}")
        urllib.request.urlretrieve(url, outpath)
        print(f"Saved: {outpath}")
    except Exception as e:
        print(f"Error generating {img['name']}: {e}")


async def main():
    await asyncio.gather(*[generate_one(img) for img in images])
    print("\nDone!")


asyncio.run(main())
