import { zodResolver } from "@hookform/resolvers/zod"
import { Chip, TextField as MuiTextField } from "@mui/material"
import Autocomplete from "@mui/material/Autocomplete"
import { useEffect } from "react"
import { useForm, Controller, useFieldArray } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { Button } from "../../../../components/ui/Button"
import { Select } from "../../../../components/ui/Select"
import { TextField } from "../../../../components/ui/TextField"
import { IssueType } from "../../constants/form"
import { saveForm } from "../../formSlice"
import { requestSchema } from "../../schema"
import { isFormDirty } from "../../utils/form"
import { ReproduceStep } from "./ReproduceStep"
import type { AppDispatch, RootState } from "../../../../store"
import type { RequestFormValues } from "../../schema"

const issueOptions = [
  { value: IssueType.Bug, label: IssueType.Bug },
  { value: IssueType.Feature, label: IssueType.Feature },
  { value: IssueType.Inquiry, label: IssueType.Inquiry },
]

const tagOptions = [
  "UI",
  "UX",
  "Performance",
  "Bug",
  "Feature Request",
  "Enhancement",
  "Documentation",
  "Security",
  "Other",
]

export const RequestForm = () => {
  const formData = useSelector((state: RootState) => state.form.formData)
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
    getValues,
  } = useForm<RequestFormValues>({
    resolver: zodResolver(requestSchema),
    defaultValues: formData || {
      name: "",
      email: "",
      issueType: IssueType.Bug,
      tags: [],
      stepsToReproduce: [{ description: "" }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "stepsToReproduce",
  })

  const onSubmit = (data: RequestFormValues) => {
    dispatch(saveForm(data))
    navigate("/confirm")
  }

  const isFormChanged = isFormDirty(getValues())

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isFormChanged) {
        e.preventDefault()
        e.returnValue = ""
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [isFormChanged])

  return (
    <>
      <form className='flex flex-col gap-4 justify-center' onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='flex flex-col gap-4'>
          <legend className='mb-2'>Personal Information</legend>
          <TextField
            id='name'
            name='name'
            label='Name'
            value={watch("name")}
            helperText={errors.name?.message}
            error={!!errors.name}
            onChange={(e) => setValue("name", e.target.value)}
          />
          <TextField
            id='email'
            name='email'
            type='text'
            label='Email'
            value={watch("email")}
            helperText={errors.email?.message}
            error={!!errors.email}
            onChange={(e) => setValue("email", e.target.value)}
          />
        </fieldset>

        <fieldset className='flex flex-col gap-4'>
          <legend className='mb-2'>Issue Details</legend>
          <Controller
            name='issueType'
            control={control}
            render={({ field, fieldState }) => (
              <Select
                value={field.value}
                id='issueType'
                labelId='issueType'
                label='Issue type'
                menuItems={issueOptions}
                handleChange={field.onChange}
                error={!!fieldState.error}
                errorText={fieldState.error?.message}
              />
            )}
          />
          <Autocomplete
            multiple
            id='tags'
            value={watch("tags")}
            onChange={(_, newValue) => {
              setValue("tags", newValue)
            }}
            options={tagOptions}
            getOptionLabel={(option) => option}
            renderValue={(values, getItemProps) =>
              values.map((option, index) => {
                const { key, ...itemProps } = getItemProps({ index })
                return <Chip key={key} label={option} {...itemProps} />
              })
            }
            renderInput={(params) => <MuiTextField {...params} name='tags' label='Tags' />}
          />
        </fieldset>

        <fieldset className='flex flex-col gap-4'>
          <legend className='mb-2'>Steps to Reproduce</legend>
          {fields.map((_, index) => (
            <Controller
              key={index}
              name={`stepsToReproduce.${index}.description`}
              control={control}
              render={({ field, fieldState }) => (
                <ReproduceStep
                  value={field.value}
                  index={index}
                  removeStep={() => remove(index)}
                  onChange={field.onChange}
                  error={!!fieldState.error}
                  helperText={
                    fieldState.error ? `Step ${index + 1} ${fieldState.error?.message}` : ""
                  }
                />
              )}
            />
          ))}
          <div className='flex justify-end'>
            <Button
              color='inherit'
              onClick={() => append({ description: "" })}
              variant='outlined'
              disabled={fields.length >= 5}
            >
              Add Step
            </Button>
          </div>
        </fieldset>

        <div className='flex justify-center'>
          <Button type='submit' color='primary'>
            Continue
          </Button>
        </div>
      </form>
    </>
  )
}
