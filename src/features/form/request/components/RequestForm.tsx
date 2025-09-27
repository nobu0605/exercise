import { Button } from "../../../../components/ui/Button"
import { Select } from "../../../../components/ui/Select"
import { TextField } from "../../../../components/ui/TextField"
import { IssueType } from "../../constants/form"

const issueOptions = [
  { value: IssueType.Bug, label: IssueType.Bug },
  { value: IssueType.Feature, label: IssueType.Feature },
  { value: IssueType.Inquiry, label: IssueType.Inquiry },
]

export const RequestForm = () => {
  return (
    <form className='flex flex-col gap-4 justify-center'>
      <fieldset className='flex flex-col gap-4'>
        <legend>Personal Information</legend>
        <TextField id='name' name='name' label='Name' required />
        <TextField id='email' name='email' type='email' label='Email' required />
      </fieldset>

      <fieldset className='flex flex-col gap-4'>
        <legend>Issue Details</legend>
        <Select
          value={""}
          id='issue'
          labelId='issue'
          label='Issue'
          required
          menuItems={issueOptions}
          handleChange={() => {}}
        />
        <TextField id='tags' name='tags' label='Tags' />
        <TextField id='steps' name='steps' label='Steps to Reproduce' required />
      </fieldset>

      <div className='flex justify-center'>
        <Button type='submit' color='inherit'>
          Continue
        </Button>
      </div>
    </form>
  )
}
