import AsyncSelect from "./AsyncSelect";

export default {
    title: "Async Select",
    component: AsyncSelect,
    tags: ["autodocs"],
};

const skills = [
    {
        "idSkill": 50,
        "nameSkill": "NestJS"
    },
    {
      "idSkill": 0,
      "nameSkill": "Redux"
    },
    {
      "idSkill": 1,
      "nameSkill": "Docker"
    },
    {
      "idSkill": 2,
      "nameSkill": "Visual Basic"
    },
    {
      "idSkill": 3,
      "nameSkill": "Oauth2"
    },
    {
      "idSkill": 4,
      "nameSkill": "Kubernetes"
    },
    {
      "idSkill": 5,
      "nameSkill": "Cobol"
    },
    {
      "idSkill": 6,
      "nameSkill": "HTML"
    },
    {
      "idSkill": 7,
      "nameSkill": "Kubernetes"
    },
    {
      "idSkill": 8,
      "nameSkill": "Java"
    },
    {
      "idSkill": 9,
      "nameSkill": "Cobol"
    },
    {
      "idSkill": 10,
      "nameSkill": "Python"
    },
    {
      "idSkill": 11,
      "nameSkill": "Javascript"
    },
    {
      "idSkill": 12,
      "nameSkill": "HTML"
    },
    {
      "idSkill": 13,
      "nameSkill": ".Net"
    },
    {
      "idSkill": 14,
      "nameSkill": "HTML"
    },
    {
      "idSkill": 15,
      "nameSkill": ".Net"
    },
    {
      "idSkill": 16,
      "nameSkill": "HTML"
    },
    {
      "idSkill": 17,
      "nameSkill": "Kubernetes"
    },
    {
      "idSkill": 18,
      "nameSkill": "C#"
    },
    {
      "idSkill": 19,
      "nameSkill": "Oauth2"
    },
    {
        "idSkill": 21,
        "nameSkill": "Architecture"
    },
    {
        "idSkill": 22,
        "nameSkill": "Less"
    },
    {
        "idSkill": 23,
        "nameSkill": "Less"
    },
    {
    "idSkill": 24,
    "nameSkill": "Tailwind"
    },
    {
    "idSkill": 25,
    "nameSkill": "Less"
    },
    {
    "idSkill": 26,
    "nameSkill": "Less"
    },
    {
    "idSkill": 27,
    "nameSkill": "npm"
    },
    {
    "idSkill": 28,
    "nameSkill": "Architecture"
    },
    {
    "idSkill": 29,
    "nameSkill": "Nothing"
    },
    {
    "idSkill": 30,
    "nameSkill": "Tailwind"
    }
];

const totalSkills = 30;
const optionsPerPage = 10;

function fetchSkills(page) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(skills.slice(
                (page - 1) * optionsPerPage,
                page * optionsPerPage
            ));
        }, 1500);
    });
}

const selectInputDataTransformer = (data) => {
    return data.map(e => ({
      label: e.nameSkill,
      value: e.idSkill
    }));
};
  
const loadOptions = async (search, page) => {

    let skills = [];
    if (!search) {
    skills = await fetchSkills(page);
    } else {
    const searchLower = search.toLowerCase();

    skills = skills.filter(({ label }) =>
        label.toLowerCase().includes(searchLower)
    );
    }

    const hasMore = Math.ceil(totalSkills / optionsPerPage) > page;
    
    return {
        options: selectInputDataTransformer(skills),
        hasMore
    };
};

const defaultAdditional = {
    page: 1
};

const loadPageOptions = async (q, prevOptions, { page }) => {
    const { options, hasMore } = await loadOptions(q, page);
  
    return {
        options,
        hasMore,
        additional: {
            page: page + 1
        }
    };
};

export const Default = {
    args: {
        isMulti: true,
        isSearchable: true,
        additional: defaultAdditional,
        loadOptions: loadPageOptions
    }
};

export const WithError = {
    args: {
        isMulti: true,
        isSearchable: true,
        additional: defaultAdditional,
        loadOptions: loadPageOptions,
        error: "Veuillez sélectionner une option"
    }
};
