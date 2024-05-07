export const arrayItems
=[{
    name:"Q&A Maker",
    id:"q&a",
    description:"Answers all questions based on existing knowledge",
    option:{
    model: "gpt-3.5-turbo",
  temperature: 0.7,
  max_tokens: 64,
  top_p: 1,
  stop:["\n"],
    }
},
{
    name:"Grammerly",
    id:"grammerly", 
    description:"Checks grammer and spelling",
    option:{
        model: "gpt-3.5-turbo",
  messages: [
    {
      "role": "system",
    },
    {
      "role": "user",
    }
  ],
  temperature: 0.7,
  max_tokens: 64,
  top_p: 1,
    }
},
{
    name:"Movie To emoji",
    id:"movieToEmoji",
    description:"Converts movie to emoji",
    option:{
        model: "gpt-3.5-turbo",
  messages: [
    {
      "role": "system",
    },
    {
      "role": "user",
    }
  ],
  temperature: 0.7,
  max_tokens: 64,
  top_p: 1,
    }
},
    {
        name: "All code to Java",
        id: "convertsAllcodetoEnglishJava",
        description: "Converts all code to java",
        option:{
            model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
        },
        {
          "role": "user",
        }
      ],
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1,
        }
    },
    {
        name: "Explains code",
        id: "explainsCode",
        description: "Explains code",
        option:{
            model: "gpt-4",
  messages: [
    {
      "role": "system",
      //"content": "You will be provided with a piece of code, and your task is to explain it in a concise way."
    },
    {
      "role": "user",
      //"content": "class Log:\n    def __init__(self, path):\n        dirname = os.path.dirname(path)\n        os.makedirs(dirname, exist_ok=True)\n        f = open(path, \"a+\")\n\n        # Check that the file is newline-terminated\n        size = os.path.getsize(path)\n        if size > 0:\n            f.seek(size - 1)\n            end = f.read(1)\n            if end != \"\\n\":\n                f.write(\"\\n\")\n        self.f = f\n        self.path = path\n\n    def log(self, event):\n        event[\"_event_id\"] = str(uuid.uuid4())\n        json.dump(event, self.f)\n        self.f.write(\"\\n\")\n\n    def state(self):\n        state = {\"complete\": set(), \"last\": None}\n        for line in open(self.path):\n            event = json.loads(line)\n            if event[\"type\"] == \"submit\" and event[\"success\"]:\n                state[\"complete\"].add(event[\"id\"])\n                state[\"last\"] = event\n        return state"
    }
  ],
  temperature: 0.7,
  max_tokens: 64,
  top_p: 1,
        }
    },
{
    name:"Remove Bug",
    id:"RemoveBug",
    description:"Removes Bug",
    option:{
        model: "gpt-3.5-turbo",
  messages: [
    {
      "role": "system",
    },
    {
      "role": "user",
    }
  ],
  temperature: 0.7,
  max_tokens: 64,
  top_p: 1,
    }
},
];