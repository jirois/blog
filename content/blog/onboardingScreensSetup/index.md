---
title: Simple Onboard screen setup with navigation and viewPager2 in android.
date: "2021-05-21T22:12:03.284Z"
description: "In this article I will work you through how to setup onboarding screen in android with indicator quickly on the go.
"
---

Onboarding screens have become increasingly vital in apps development and among developers owing to the role they play. In this article I will working you through how to setup one quickly on the go, using the android navigation and viewPager2. So without further Ado, let’s dive in!
Here is what we going to build.

[GITHUB](https://github.com/jirois/SimpleOnboardingScreens) for the xml codes

Now, because am going to use fragments, I will have to extend the FragmentStateAdapter class. I will like to keep the explanations brief, since the aim of this article is work you quickly through how you can setup a simple onboarding screen. For more explanation of the ViewPager2 and its benefits, please see the document here. Alright, time to see the codes in action.

The first task will be to implement our viewpager adapter,

```
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentManager
import androidx.lifecycle.Lifecycle
import androidx.viewpager2.adapter.FragmentStateAdapter

class ViewPagerAdapter(
    list: ArrayList<Fragment>,
    fragmentManager: FragmentManager,
    lifecycle: Lifecycle
    ): FragmentStateAdapter(fragmentManager, lifecycle) {
    private val fragmentList = list
    override fun getItemCount(): Int {
        return fragmentList.size
    }

    override fun createFragment(position: Int): Fragment {
        return fragmentList[position]
    }

}
```

In the code above, first with create class then pass in three parameters which are fragment list, FragmentManger and Lifecycle, then extend the FragmentStateAdapter class, passing the fragmentManager and the lifecycle objects as arguments. Next, we are prompt to override the getItemCount and createFragment methods, both of which return the number of fragments and the fragments position, very similar to the recyclerview methods. Our next move will be to plug the adapter we create to the viewpager adapter.

```
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.nelsonomas.simpleonboarding.databinding.FragmentViewPagerBinding
import androidx.databinding.DataBindingUtil
import com.google.android.material.tabs.TabLayoutMediator

class ViewPager : Fragment() {
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val binding: FragmentViewPagerBinding= DataBindingUtil.inflate(inflater, R.layout.fragment_view_pager, container, false)

    val fragmentList = arrayListOf(
        ScreenOne(),
        ScreenTwo(),
        ScreenThree()
    )

      val adapter = ViewPagerAdapter(
          fragmentList,
          requireActivity().supportFragmentManager,
          lifecycle
      )
        binding.viewPager.adapter = adapter

        TabLayoutMediator(binding.tabLayout, binding.viewPager){ tab, position ->

        }.attach()

        return binding.root
    }

}
```

In the code above, first we created the fragment list from our onboarding screens, then pass the various arguments into the ViewPagerAdapter class we created earlier and finally we plug the adapter . Next we add the indicators using the TabLayoutMediator, passing the tabLayout id and viewpager id from our viewpager xml file as arguments, then call the onattach method on it. For using buttons to navigate between the various screens, get the code from the github repo here.

That’s all about setting up an onboarding screens. This codes here serve as a template for building your onboarding screen. You can customise it however you want to. I sincerely hope, this help someone out there. You can follow me on twitter, let’s share ideas together.

Here is the [GITHUB Repo](https://github.com/jirois/SimpleOnboardingScreens) to the get codes for the project.
